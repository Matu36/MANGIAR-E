const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const modelsMock = require('./src/helpers/modelsMock.js');
const Order_details = require('./src/models/Order_details.js');

conn.sync(
  {
    force: true
//    alter: true
  }
)
.then(async () => {
  console.log('DB sincronized OK!');
  server.listen(3001, () => {
    console.log('Back server listening at 3001'); // eslint-disable-line no-console
  });
})

// Inserts de prueba en DB
//.then(() => modelsMock(conn.models))

.catch(err => console.log(err));
