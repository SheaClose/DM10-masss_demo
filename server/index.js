const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  cors = require("cors"),
  port = 3001,
  massive = require("massive"),
  mainCtrl = require("./mainCtrl");
require("dotenv").config();

app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    db.run("select * from cars").then(cars => {
      if (!cars.length) {
        db
          .init_table()
          .then(console.log)
          .catch(console.log);
      }
    });
    app.set("db", db);
  })
  .catch(console.log);

app.get("/api/cars", mainCtrl.getCars);
app.get("/api/cars/:id", mainCtrl.getCarById);
app.post("/api/cars", mainCtrl.createCar);

app.listen(port, console.log(`This is Dr Krane... I'm Listenting @ ${port}`));
