const scrapeController = require("../controllers/scrape");
const heloController = require("../controllers/helo");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.use("/api/tanks", scrapeController.getScrapes);
  app.use("/api/helos", heloController.getHelos);
  // app.use("/api/rockets", rocketController.getRockets);
  // app.use("/api/dragons", dragonController.getDragons);
};
