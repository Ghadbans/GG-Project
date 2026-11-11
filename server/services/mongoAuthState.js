const { BufferJSON, initAuthCreds, proto } = require('@whiskeysockets/baileys');
const WhatsAppCloudSession = require('../model/whatsappCloudSessionSchema');

const useMongoAuthState = async () => {
  const writeData = async (data, key) => {
    try {
      const serialized = JSON.stringify(data, BufferJSON.replacer);
      await WhatsAppCloudSession.findOneAndUpdate(
        { key },
        { $set: { value: serialized, updatedAt: new Date() } },
        { upsert: true, new: true }
      );
    } catch (err) {
      console.warn(`[MongoAuthState] Error writing ${key}:`, err.message);
    }
  };

  const readData = async (key) => {
    try {
      const doc = await WhatsAppCloudSession.findOne({ key }).lean();
      if (!doc || !doc.value) return null;
      return JSON.parse(doc.value, BufferJSON.reviver);
    } catch (err) {
      console.warn(`[MongoAuthState] Error reading ${key}:`, err.message);
      return null;
    }
  };

  const removeData = async (key) => {
    try {
      await WhatsAppCloudSession.deleteOne({ key });
    } catch (err) {
      console.warn(`[MongoAuthState] Error removing ${key}:`, err.message);
    }
  };

  const creds = (await readData('creds')) || initAuthCreds();

  return {
    state: {
      creds,
      keys: {
        get: async (type, ids) => {
          const data = {};
          await Promise.all(
            ids.map(async (id) => {
              let value = await readData(`${type}-${id}`);
              if (type === 'app-state-sync-key' && value) {
                value = proto.Message.AppStateSyncKeyData.fromObject(value);
              }
              data[id] = value;
            })
          );
          return data;
        },
        set: async (data) => {
          const tasks = [];
          for (const category in data) {
            for (const id in data[category]) {
              const value = data[category][id];
              const key = `${category}-${id}`;
              tasks.push(value ? writeData(value, key) : removeData(key));
            }
          }
          await Promise.all(tasks);
        }
      }
    },
    saveCreds: () => writeData(creds, 'creds'),
    clearSession: async () => {
      try {
        await WhatsAppCloudSession.deleteMany({});
      } catch (err) {
        console.warn('[MongoAuthState] Error clearing session:', err.message);
      }
    }
  };
};

module.exports = useMongoAuthState;
