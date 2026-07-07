const PROJECT_NAME = 'PUR-00147';
const BASE_URL = 'http://127.0.0.1:8080/endpoint';

// EXACT usage data extracted from backup D:\GG\RECOVERY_POINTS\13may26
const backupUsageData = [
  { "idRow": "4ccb352d-7ebd-4e4a-8c02-a8dfa3396550", "itemOut": 0, "itemReturn": 0 },
  { "idRow": "4d37a20c-aefd-446e-9bad-e6ebb1e26c2a", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "21617689-f504-423b-846f-5fc8d157804f", "itemOut": 25, "itemReturn": 0 },
  { "idRow": "bd3ebcc0-8f8e-44f5-977f-de10d52d2959", "itemOut": 0.5, "itemReturn": 0 },
  { "idRow": "9f2f07f1-2636-4ceb-b047-18afaf0c96da", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "f7d73120-6349-4894-b2c3-91e7e676e43c", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "a6429969-005d-478a-9deb-39c7678ee621", "itemOut": 150, "itemReturn": 0 },
  { "idRow": "4bf5aaa5-f1a5-423b-8fc5-d34e64ec2f9d", "itemOut": 50, "itemReturn": 0 },
  { "idRow": "fcdc7863-defd-490c-bcd5-35c70ec8d12f", "itemOut": 150, "itemReturn": 0 },
  { "idRow": "a41bebe8-73dd-49ae-bf4b-eae5663a5df9", "itemOut": 50, "itemReturn": 0 },
  { "idRow": "936fcb9d-bed6-4a1d-8821-87fc6d2c4d4b", "itemOut": 0, "itemReturn": 0 },
  { "idRow": "b56f7d11-3816-4cc3-beef-add224907c6f", "itemOut": 100, "itemReturn": 0 },
  { "idRow": "137fe2b1-040a-4e2e-8d60-641f3bbf0250", "itemOut": 8, "itemReturn": 0 },
  { "idRow": "7e231ad1-90e7-4e27-91d7-d1e4efa4b673", "itemOut": 0.1, "itemReturn": 0 },
  { "idRow": "c531b408-e047-4af1-923a-45778e1d075a", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "e459afcb-ab33-438b-98c8-a355013865a6", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "f3634a32-d075-4e29-aee5-6fb40b8eda1d", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "3129dc9e-67d7-4b8b-b1ef-3d883fe52a87", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "928b22a4-df28-4df2-bdda-34090a9d86fe", "itemOut": 57, "itemReturn": 0 },
  { "idRow": "96d4115b-4e8e-4ac8-a4c1-6b0dd4ec1e6d", "itemOut": 13, "itemReturn": 0 },
  { "idRow": "3f9d2ae1-d8d3-479c-8f18-ed2b22534d51", "itemOut": 15, "itemReturn": 0 },
  { "idRow": "42f91f40-631b-4404-88bd-3f534ec87c54", "itemOut": 10, "itemReturn": 0 },
  { "idRow": "e6f449d4-5bed-441c-b0d6-ad5d79a146df", "itemOut": 3, "itemReturn": 0 },
  { "idRow": "25c1ae93-0518-4272-a714-2f2f26dfc6ff", "itemOut": 3, "itemReturn": 0 },
  { "idRow": "a109141e-fe55-4a33-b884-de08c08522df", "itemOut": 3, "itemReturn": 0 },
  { "idRow": "c319b264-66b1-41e7-bd35-10dfbcba78a4", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "3ba0a677-6ed7-4127-8b52-59e02c0d26e5", "itemOut": 6.5, "itemReturn": 0 },
  { "idRow": "1d5feee7-2ffe-4215-b95f-952cb0d0e6c3", "itemOut": 0.7, "itemReturn": 0 },
  { "idRow": "81d5f572-5b92-4777-8834-ddea39ce9f94", "itemOut": 19, "itemReturn": 0 },
  { "idRow": "c3ac193e-f568-4fea-9da6-7eeab7f67b7f", "itemOut": 25, "itemReturn": 0 },
  { "idRow": "0054d441-1797-4959-84a5-1fb33a349e57", "itemOut": 10, "itemReturn": 0 },
  { "idRow": "3a1c524a-5b25-4335-852a-9e19c09898a6", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "fd04dc9e-6d87-4c99-a4ec-d129a89674f6", "itemOut": 1, "itemReturn": 0 },
  { "idRow": "ad8b51d4-5c37-4c52-8c44-2c07862b8cd6", "itemOut": 20, "itemReturn": 0 },
  { "idRow": "28a39ca5-6f61-4d7b-9651-bc40c00d3224", "itemOut": 20, "itemReturn": 0 }
];

async function restoreUsage() {
  try {
    const response = await fetch(`${BASE_URL}/purchase`);
    const data = await response.json();
    const project = data.data.find(p => p.purchaseName === PROJECT_NAME);

    if (!project) { console.log('Project not found'); return; }

    // Map existing items and apply backup usage values
    const updatedItems = project.items.map(item => {
      const usage = backupUsageData.find(u => u.idRow === item.idRow);
      if (usage) {
        return {
          ...item,
          itemOut: usage.itemOut,
          newItemOut: 0, // Reset session counter
          itemReturn: usage.itemReturn || 0
        };
      }
      return item;
    });

    const putResponse = await fetch(`${BASE_URL}/update-purchase/${project._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...project, items: updatedItems })
    });

    if (putResponse.ok) {
      console.log('✅ Usage restoration complete! Refresh your app.');
    } else {
      console.log('❌ Error updating usage:', putResponse.statusText);
    }
  } catch (err) {
    console.error('❌ Failed:', err.message);
  }
}

restoreUsage();