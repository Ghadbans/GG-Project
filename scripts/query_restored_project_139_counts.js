print('itemOut count:', db.itemOut.countDocuments({ 'reference._id': '67618f58be9e77ca39e1d3fc' }));
print('itemReturn count:', db.itemReturn.countDocuments({ 'reference._id': '67618f58be9e77ca39e1d3fc' }));
print('itemPurchase count (projectName._id):', db.itemPurchase.countDocuments({ 'projectName._id': '67618f58be9e77ca39e1d3fc' }));
print('itemPurchase count (POID):', db.itemPurchase.countDocuments({ POID: '67618f58be9e77ca39e1d3fc' }));
print('PurchaseOrder count:', db.PurchaseOrder.countDocuments({ $or:[{_id:'67618f58be9e77ca39e1d3fc'},{outNumber:139}] }));
