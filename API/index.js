const server = require("./src/app.js");
const { conn, PORT } = require("./src/db.js");
const modelsMock = require("./src/helpers/modelsMock.js");

conn
  .sync({
    force: true,
    //    alter: true
  })
  .then(async () => {
    console.log("DB sincronized OK!");
    server.listen(PORT, () => {
      console.log("Back server listening at " + PORT); // eslint-disable-line no-console
    });
  })

  // Inserts de prueba en DB
  //.then(() => modelsMock(conn.models))

  .catch((err) => console.log(err));
