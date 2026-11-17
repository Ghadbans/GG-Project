# Cloudflare & Railway Defensive Security Checklist (v3.6.69)

This document provides step-by-step instructions for completing the edge hardening and defensive configuration across Cloudflare and Railway to protect the Global Gate ERP (`api.globalgate.sarl` and `portal.globalgate.sarl`).

---

## 1. DNS & TLS Configuration (Cloudflare Dashboard)

Navigate to **Cloudflare Dashboard -> Websites -> globalgate.sarl**:

- [ ] **DNS Records:**
  - Verify that the `api` (A/CNAME pointing to Railway) and `portal` (CNAME pointing to Cloudflare Pages) records have proxy status set to **Proxied (Orange Cloud)**.
  - *Note:* Cloudflare Pages custom domains (`portal.globalgate.sarl`) are proxied automatically.
- [ ] **SSL/TLS Encryption Mode:**
  - Go to **SSL/TLS -> Overview**.
  - Set encryption mode to **Full (strict)** to ensure end-to-end TLS verification between Cloudflare edge and Railway origin.
- [ ] **Edge Certificates:**
  - Go to **SSL/TLS -> Edge Certificates**.
  - Enable **Always Use HTTPS** (`On`).
  - Set **Minimum TLS Version** to `TLS 1.2`.
  - Enable **TLS 1.3** (`On`).
  - Enable **Automatic HTTPS Rewrites** (`On`).
- [ ] **HTTP Strict Transport Security (HSTS):**
  - Enable HSTS with `max-age` set to 6 months (`15768000` seconds) after confirming stable HTTPS operation across desktop, mobile, and web. (Do not enable preload yet).

---

## 2. WAF Custom Rules (Cloudflare Free Tier - 5 Rules Available)

Navigate to **Security -> WAF -> Custom rules**:

### Rule 1: Block Non-Standard HTTP Methods
- **Rule name:** `Block Invalid HTTP Methods`
- **Expression:**
  ```text
  not http.request.method in {"GET" "POST" "PUT" "PATCH" "DELETE" "OPTIONS" "HEAD"}
  ```
- **Action:** `Block`

### Rule 2: Restrict Internal System Initialization & Debug Endpoints
- **Rule name:** `Lock Internal Init & Debug Routes`
- **Expression:**
  ```text
  http.host eq "api.globalgate.sarl" and (starts_with(http.request.uri.path, "/init-") or http.request.uri.path eq "/debug-db") and ip.src ne <YOUR_OFFICE_OR_ADMIN_STATIC_IP>
  ```
  *(If you do not have a static IP, leave out the `ip.src` clause and rely on the timing-safe `ADMIN_SETUP_KEY` header requirement).*
- **Action:** `Block`

### Rule 3: Block Empty User-Agent Header
- **Rule name:** `Block Empty User-Agent on API`
- **Expression:**
  ```text
  http.host eq "api.globalgate.sarl" and http.user_agent eq ""
  ```
- **Action:** `Block`
- *(Electron, Capacitor Android app, and standard web browsers always supply a valid User-Agent).*

### Rule 4: Block Known Scanner Probes & Vulnerability Scans
- **Rule name:** `Block Vulnerability Scanners & Probes`
- **Expression:**
  ```text
  http.request.uri.path contains "/.env" or http.request.uri.path contains "/wp-" or http.request.uri.path contains ".php" or http.request.uri.path contains "/.git" or http.request.uri.path contains "/actuator" or http.request.uri.path contains "/console"
  ```
- **Action:** `Block`

### Rule 5: Optional Geo-Fencing
- **Rule name:** `Restrict Geographic Access (Optional)`
- **Expression:**
  *(Optional: If your operations are strictly localized to specific countries like CD, AE, LB, FR, US, you can challenge or block requests originating outside these countries. Otherwise skip to prevent blocking staff during international travel).*

> ⚠️ **Important:** Do **not** apply Managed Challenge or Interactive Challenge on `/auth/*` or `/endpoint/*`. The Android Capacitor app and Electron desktop client cannot execute JavaScript challenges or solve CAPTCHAs, which would lock users out.

---

## 3. Rate Limiting Rules (Cloudflare Free Tier)

Navigate to **Security -> WAF -> Rate limiting rules**:

### Rule 1: Edge Brute-Force Protection for Login
- **Rule name:** `Strict Login Rate Limit`
- **Expression:**
  ```text
  http.host eq "api.globalgate.sarl" and http.request.uri.path eq "/auth/login"
  ```
- **Characteristics:** `IP`
- **Requests:** `20` requests
- **Period:** `10 seconds`
- **Action:** `Block` for `10 seconds` (or Managed Challenge)
- *(The backend Node.js API provides the secondary defense: 10 failed login attempts per 15 minutes via `express-rate-limit`).*

---

## 4. Bot & DDoS Protection Settings

Navigate to **Security -> Settings**:
- [ ] **Security Level:** `Medium`
- [ ] **Browser Integrity Check:** `On`
- [ ] **HTTP DDoS Attack Protection:** Default (`High` / Managed by Cloudflare)
- [ ] **Bot Fight Mode:**
  - Turn on Bot Fight Mode under **Security -> Bots**.
  - *Verification test:* After enabling, test authentication on the Android mobile app, Electron desktop client, and Cloudflare Pages web portal. If any client receives 403 or challenge blocks, disable Bot Fight Mode (on Cloudflare Free tier, custom bypass rules for Bot Fight Mode are not available).

---

## 5. Origin Lock & Secrets (Railway Configuration)

To prevent attackers from bypassing Cloudflare by directly targeting the underlying Railway infrastructure:

### A. Set Secrets in Railway Variables
Navigate to **Railway Dashboard -> Project -> Server Service -> Variables**:
1. Add `ADMIN_SETUP_KEY`:
   - Set to the secure 64-character random hex string generated during the v3.6.69 deployment.
   - Used for authenticating `/init-admin`, `/init-permissions`, and `/debug-db` endpoints.
2. Add `ORIGIN_VERIFY_SECRET`:
   - Set to the secure 64-character random hex string generated during the v3.6.69 deployment.
   - When set, the backend rejects any request missing a matching `X-Origin-Verify` header with HTTP 403.

### B. Configure Cloudflare Transform Rule
Navigate to **Cloudflare Dashboard -> Rules -> Transform Rules -> Modify Request Header**:
1. Click **Create rule**.
2. **Rule name:** `Attach Origin Verification Header`
3. **If incoming requests match:**
   - Field: `Hostname`
   - Operator: `equals`
   - Value: `api.globalgate.sarl`
4. **Then modify request header:**
   - Type: `Set dynamic` or `Set static`
   - Header name: `X-Origin-Verify`
   - Value: `<PASTE_THE_EXACT_ORIGIN_VERIFY_SECRET>`
5. Click **Deploy**.

### C. Remove Public Railway Subdomain
1. In the Railway Server service settings under **Networking -> Public Networking**:
2. Once DNS propagation for `api.globalgate.sarl` is confirmed and working, remove or disable any default `*.up.railway.app` public domain.
3. This ensures all incoming traffic is forced through Cloudflare's WAF and edge DDoS defenses.

---

## 6. Verification with Security Check Script

Run the automated verification suite against your local or staging environment:

```bash
node scripts/security-check.js
```

To run against a staging or deployed server:
```bash
node scripts/security-check.js --target=http://localhost:8080
```

The script verifies:
1. Security headers (`X-Content-Type-Options`, `Strict-Transport-Security`, `X-DNS-Prefetch-Control`, absence of `X-Powered-By`).
2. CORS headers on authorized origins and rejection on unauthorized origins.
3. Oversized JSON payload rejection (`413 Payload Too Large`).
4. NoSQL operator stripping (`$gt`, `$ne`).
5. Query parameter clamping (>200 characters truncated to avoid ReDoS).
6. Rate limiting enforcement (`429 Too Many Requests`).
7. Protected internal endpoints (`/init-admin`, `/debug-db` returning `403 Forbidden` without key).
