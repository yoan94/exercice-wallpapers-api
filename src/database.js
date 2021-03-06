const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost/wallpapers', { useUnifiedTopology: true });

let db = null;
/** @type {import('mongodb').Collection} */
let Wallpapers = null;

const connect = async function () {
  const result = await client.connect();
  db = client.db('wallpapers');
  Wallpapers = db.collection('wallpapers');
  console.log('Connecté à la database mongodb.');
  return result;
};

module.exports = {
  connect,
  db() {
    return db;
  },
  Wallpapers() {
    return Wallpapers;
  },
};
