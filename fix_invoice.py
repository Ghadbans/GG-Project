
import os

path = r'c:\Users\GG\.gemini\antigravity\playground\ancient-kepler\src\js\AdminView1\PageView\InvoiceView\InvoiceViewAdminAll.js'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    # Headers
    (">#</th>", "><span style={{ fontSize: '11px' }}>#</span></th>"), 
    (">Item</th>", "><span style={{ fontSize: '11px' }}>Item</span></th>"),
    (">Description</th>", "><span style={{ fontSize: '11px' }}>Description</span></th>"),
    (">Qty</th>", "><span style={{ fontSize: '11px' }}>Qty</span></th>"),
    (">Rate</th>", "><span style={{ fontSize: '11px' }}>Rate</span></th>"),
    (">Discount</th>", "><span style={{ fontSize: '11px' }}>Discount</span></th>"),
    (">Total</th>", "><span style={{ fontSize: '11px' }}>Total</span></th>"),
    
    # Body - Index
    ("<span>{i + 1}</span>", "<span style={{ fontSize: '11px' }}>{i + 1}</span>"),
    
    # Body - New Description
    (">{Item.newDescription}</td>", "><span style={{ fontSize: '11px' }}>{Item.newDescription}</span></td>"),
    
    # Body - Item Name (Inject style into existing span)
    ("hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''}>", "hidden={Item.itemName ? Item.itemName.itemName === 'empty' : ''} style={{ fontSize: '11px' }}>"),
    
    # Body - Description
    ("<span>{Item.itemDescription.toUpperCase()}</span>", "<span style={{ fontSize: '11px' }}>{Item.itemDescription.toUpperCase()}</span>"),
    ("<span>{Item.itemDescription}</span>", "<span style={{ fontSize: '11px' }}>{Item.itemDescription}</span>"),
    (">{Item.itemDescription}</span>", " style={{ fontSize: '11px' }}>{Item.itemDescription}</span>"), # fallback if no span wrapper?? No, {Item.itemDescription} is usually wrapped.
    
    # Body - Qty
    ("<span>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span>", "<span style={{ fontSize: '11px' }}>{Item.itemQty} {relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''}</span>"),
    
    # Body - Rate, Discount, Amount values
    ("<span>{Item.itemRate}</span>", "<span style={{ fontSize: '11px' }}>{Item.itemRate}</span>"),
    ("<span>{Item.itemDiscount}</span>", "<span style={{ fontSize: '11px' }}>{Item.itemDiscount}</span>"),
    ("<span>{Item.itemAmount?.toFixed", "<span style={{ fontSize: '11px' }}>{Item.itemAmount?.toFixed"),
    
    # Body - Prefixes ($ and %)
    ("<span data-prefix>$</span>", "<span data-prefix style={{ fontSize: '11px' }}>$</span>"),
    ("<span data-prefix>%</span>", "<span data-prefix style={{ fontSize: '11px' }}>%</span>"),

    # Footer - Sub Total, Tax Inclusive
    ("<span>Sub Total</span>", "<span style={{ fontSize: '11px' }}>Sub Total</span>"),
    ("<span style={{ color: 'gray' }}>(Tax Inclusive)</span>", "<span style={{ color: 'gray', fontSize: '11px' }}>(Tax Inclusive)</span>"),
    
    # Footer - SubTotal Value, Shipping Value, Adjustment Value, Total Value
    ("<span>{row.subTotal}</span>", "<span style={{ fontSize: '11px' }}>{row.subTotal}</span>"),
    ("<span>Shipping</span>", "<span style={{ fontSize: '11px' }}>Shipping</span>"),
    ("<span>{row.shipping?.toFixed", "<span style={{ fontSize: '11px' }}>{row.shipping?.toFixed"),
    ("<span>{row.adjustment}</span>", "<span style={{ fontSize: '11px' }}>{row.adjustment}</span>"),
    ("<span>{row.adjustmentNumber?.toFixed", "<span style={{ fontSize: '11px' }}>{row.adjustmentNumber?.toFixed"),
    ("<span>Total</span>", "<span style={{ fontSize: '11px' }}>Total</span>"),
    ("<span>{row.totalInvoice?.toFixed", "<span style={{ fontSize: '11px' }}>{row.totalInvoice?.toFixed"),
    ("<span>Amount Paid</span>", "<span style={{ fontSize: '11px' }}>Amount Paid</span>"),
    ("<span>{row.total?.toFixed", "<span style={{ fontSize: '11px' }}>{row.total?.toFixed"),
    ("<span>Balance Due</span>", "<span style={{ fontSize: '11px' }}>Balance Due</span>"),
    ("<span>{row.balanceDue?.toFixed", "<span style={{ fontSize: '11px' }}>{row.balanceDue?.toFixed"),
    ("<span>Total In Words</span>", "<span style={{ fontSize: '11px' }}>Total In Words</span>"),
    ("<span>{row.totalW}</span>", "<span style={{ fontSize: '11px' }}>{row.totalW}</span>"),
]

new_content = content
for old, new in replacements:
    new_content = new_content.replace(old, new)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Finished replacements.")
