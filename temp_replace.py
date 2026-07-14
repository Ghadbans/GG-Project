import sys

content = open(r"D:\GG\GG-Backend-Repo\routes\Routes.js", "r", encoding="utf8").read()

target = """      query.$or = [
        { outNumber: isNaN(Number(search)) ? null : Number(search) },
        { reason: regex },
        { 'itemsQtyArray.itemName': regex },
        { 'itemsQtyArray.itemBrand': regex },
        { 'itemsQtyArray.itemDescription': regex },
        { 'reference.referenceName': regex },
      ].filter(condition => condition !== null);"""

replacement = """      query.$or = [
        { outNumber: isNaN(Number(search)) ? null : Number(search) },
        { reason: regex },
        { 'itemsQtyArray.itemName': regex },
        { 'itemsQtyArray.itemBrand': regex },
        { 'itemsQtyArray.itemDescription': regex },
        { 'reference.referenceName': regex },
        { $expr: { $regexMatch: { input: { $dateToString: { format: "%d/%m/%Y", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } },
        { $expr: { $regexMatch: { input: { $dateToString: { format: "%Y-%m-%d", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } }
      ].filter(condition => condition !== null);"""

if target in content:
    content = content.replace(target, replacement)
    open(r"D:\GG\GG-Backend-Repo\routes\Routes.js", "w", encoding="utf8").write(content)
    print("Replaced")
else:
    print("Target not found")
