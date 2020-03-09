const admin = require('firebase-admin');

const serviceAccount = require(process.env.SERVICE_KEY);

console.log('test');
console.log(process.env.SERVICE_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://pmtool-9af96.firebaseio.com',
});

const database = admin.database();

module.exports = database;
