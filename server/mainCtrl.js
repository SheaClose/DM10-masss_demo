module.exports = {
  getCars(req, res) {
    const db = req.app.get("db");
    // const { sortBy } = req.query;
    console.log(req.query.make);
    if (Object.keys(req.query).length) {
      db
        .get_sorted_cars([req.query.make])
        .then(car => res.send(car))
        .catch(console.log);
    } else {
      db.get_cars().then(cars => {
        return res.status(200).json(cars);
      });
    }
  },
  getCarById(req, res) {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_car_by_id(id).then(car => {
      return res.status(200).json(car);
    });
  },
  createCar(req, res) {
    const db = req.app.get("db");
    const { make, model, year } = req.body;
    db
      .create_car([make, model, year])
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(console.log);
  }
};
