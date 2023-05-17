var express = require("express");
var mongoose = require("mongoose");
const TourModel = require("./models/TourModel");
require("dotenv").config();

var app = express();
var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;

app.use(express.json());
app.use(express.static("public"));

mongoose.set("strictQuery", true);

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });

  app.get("/api/tours", async (req, res) => {
    try {
      const toursDB = await TourModel.find();
      res.send({ok: true, toursDB})
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ ok: false, error: error.message });
    }
  })

app.post("/api/tours", async (req, res) => {
  try {
    var { tourName, price, imgURL } = req.body;
    if (!tourName || !price || !imgURL)
      throw new Error(
        "no tourName, price, imgURL from client on server in post(/api/tours)"
      );
    var tourDB = new TourModel({ tourName, price, imgURL });
    await tourDB.save();
    res.send({ ok: true, tourDB });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log("server is on port " + port);
});
