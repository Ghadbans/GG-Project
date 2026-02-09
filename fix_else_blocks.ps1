# Fix all malformed if-else blocks in AdminView1 files
# These were caused by incomplete navigator.onLine sanitization

$files = @(
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\AdminHome.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\CustomerViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\EstimateViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\ExpensesViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\InvoiceViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\ItemOutViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\ItemPurchaseViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\ItemReturnAdminView.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\ItemViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\MaintenanceViewAdmin.js",
    "c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\PaymentView.js"
)

$fixedCount = 0

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $originalContent = $content
        
        # Pattern: Remove orphaned "} else {" after try-catch blocks followed by navigate
        # This pattern matches:  } \n } else { \n navigate('/'); \n }
        $content = $content -replace '(?s)(\}\s*catch\s*\([^)]*\)\s*\{\s*console\.error[^}]*\})\s*\}\s*else\s*\{\s*navigate\([^)]*\);\s*\}', '$1'
        
        # Also handle the case where there's just a closing brace before else
        $content = $content -replace '(?s)(\}\s*catch\s*\([^)]*\)\s*\{[^}]*\})\s*\}\s*/\*[^*]*\*/\s*\}\s*else\s*\{\s*navigate\([^)]*\);\s*\}', '$1 } else { navigate(''/''); }'
        
        if ($content -ne $originalContent) {
            Set-Content -Path $file -Value $content -NoNewline
            $fixedCount++
            Write-Host "Fixed: $(Split-Path $file -Leaf)" -ForegroundColor Green
        }
    }
}

Write-Host "`nFixed $fixedCount files" -ForegroundColor Cyan
