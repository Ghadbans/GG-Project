package com.globalgate.app;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.View;
import android.webkit.JavascriptInterface;
import androidx.core.content.FileProvider;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import com.getcapacitor.BridgeActivity;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends BridgeActivity {
    private void emitUpdateEvent(final String status, final int percent, final String message) {
        runOnUiThread(() -> {
            if (getBridge() == null || getBridge().getWebView() == null) return;
            String safeMsg = message == null ? "" : message.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ");
            String safeStatus = status == null ? "" : status.replace("'", "\\'");
            String js = "window.dispatchEvent(new CustomEvent('android-update-progress', { detail: { status: '" + safeStatus + "', percent: " + percent + ", message: '" + safeMsg + "' } }));";
            getBridge().getWebView().evaluateJavascript(js, null);
        });
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        View decorView = getWindow().getDecorView();
        ViewCompat.setOnApplyWindowInsetsListener(decorView, (v, insets) -> {
            int top = insets.getInsets(WindowInsetsCompat.Type.statusBars()).top;
            int bottom = insets.getInsets(WindowInsetsCompat.Type.navigationBars()).bottom;
            v.setPadding(0, top, 0, bottom);
            return insets;
        });

        if (getBridge() != null && getBridge().getWebView() != null) {
            // 1. Native Android Print / Save as PDF
            getBridge().getWebView().addJavascriptInterface(new Object() {
                @JavascriptInterface
                public void printDocument(final String documentName) {
                    runOnUiThread(() -> {
                        try {
                            android.print.PrintManager printManager = (android.print.PrintManager) getSystemService(Context.PRINT_SERVICE);
                            if (printManager != null) {
                                String jobName = (documentName != null && !documentName.isEmpty()) ? documentName : "GlobalGate_Document";
                                android.print.PrintDocumentAdapter printAdapter = getBridge().getWebView().createPrintDocumentAdapter(jobName);
                                printManager.print(jobName, printAdapter, new android.print.PrintAttributes.Builder()
                                    .setMediaSize(android.print.PrintAttributes.MediaSize.ISO_A4)
                                    .setMinMargins(android.print.PrintAttributes.Margins.NO_MARGINS)
                                    .build());
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    });
                }
            }, "AndroidNativePrint");

            // 2. Native Android In-App APK Updater (v3.7.5)
            getBridge().getWebView().addJavascriptInterface(new Object() {
                @JavascriptInterface
                public boolean canRequestPackageInstalls() {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        return getPackageManager().canRequestPackageInstalls();
                    }
                    return true;
                }

                @JavascriptInterface
                public void openInstallPermissionSettings() {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                        runOnUiThread(() -> {
                            try {
                                Intent intent = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES);
                                intent.setData(Uri.parse("package:" + getPackageName()));
                                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                                startActivity(intent);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                        });
                    }
                }

                @JavascriptInterface
                public void downloadAndInstallApk(final String apkUrl, final String fileName) {
                    new Thread(() -> {
                        HttpURLConnection conn = null;
                        try {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && !getPackageManager().canRequestPackageInstalls()) {
                                emitUpdateEvent("permission-required", 0, "Please allow 'Install unknown apps' for Global Gate, then tap Update Now again.");
                                openInstallPermissionSettings();
                                return;
                            }

                            emitUpdateEvent("downloading", 0, "Starting download...");
                            String currentUrl = apkUrl;
                            int redirects = 0;
                            while (redirects < 5) {
                                URL url = new URL(currentUrl);
                                conn = (HttpURLConnection) url.openConnection();
                                conn.setInstanceFollowRedirects(true);
                                conn.setConnectTimeout(15000);
                                conn.setReadTimeout(60000);
                                conn.connect();
                                int code = conn.getResponseCode();
                                if (code == HttpURLConnection.HTTP_MOVED_TEMP || code == HttpURLConnection.HTTP_MOVED_PERM || code == 307 || code == 308) {
                                    String nextUrl = conn.getHeaderField("Location");
                                    conn.disconnect();
                                    if (nextUrl == null || nextUrl.isEmpty()) break;
                                    currentUrl = nextUrl;
                                    redirects++;
                                    continue;
                                }
                                break;
                            }

                            if (conn == null || conn.getResponseCode() >= 400) {
                                int errCode = conn != null ? conn.getResponseCode() : 0;
                                emitUpdateEvent("error", 0, "Download failed (HTTP " + errCode + ")");
                                return;
                            }

                            int totalLength = conn.getContentLength();
                            File cacheDir = getExternalCacheDir() != null ? getExternalCacheDir() : getCacheDir();
                            String safeName = (fileName != null && !fileName.isEmpty()) ? fileName : "GlobalGate-update.apk";
                            File apkFile = new File(cacheDir, safeName);
                            if (apkFile.exists()) {
                                apkFile.delete();
                            }

                            try (InputStream in = new BufferedInputStream(conn.getInputStream());
                                 FileOutputStream out = new FileOutputStream(apkFile)) {
                                byte[] buffer = new byte[16384];
                                long downloaded = 0;
                                int lastPercent = -1;
                                int count;
                                while ((count = in.read(buffer)) != -1) {
                                    out.write(buffer, 0, count);
                                    downloaded += count;
                                    if (totalLength > 0) {
                                        int percent = (int) ((downloaded * 100L) / totalLength);
                                        if (percent != lastPercent) {
                                            lastPercent = percent;
                                            emitUpdateEvent("downloading", percent, "Downloading update (" + percent + "%)...");
                                        }
                                    }
                                }
                                out.flush();
                            }

                            emitUpdateEvent("installing", 100, "Launching Android installer...");
                            final File finalApk = apkFile;
                            runOnUiThread(() -> {
                                try {
                                    Uri apkUri = FileProvider.getUriForFile(
                                        MainActivity.this,
                                        getPackageName() + ".fileprovider",
                                        finalApk
                                    );
                                    Intent installIntent = new Intent(Intent.ACTION_VIEW);
                                    installIntent.setDataAndType(apkUri, "application/vnd.android.package-archive");
                                    installIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK);
                                    startActivity(installIntent);
                                } catch (Exception ex) {
                                    emitUpdateEvent("error", 0, "Installer launch failed: " + ex.getMessage());
                                }
                            });
                        } catch (Exception e) {
                            emitUpdateEvent("error", 0, "Update error: " + e.getMessage());
                        } finally {
                            if (conn != null) {
                                conn.disconnect();
                            }
                        }
                    }).start();
                }
            }, "AndroidAppUpdater");
        }
    }
}
