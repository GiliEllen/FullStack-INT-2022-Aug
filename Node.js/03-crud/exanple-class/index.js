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

app.post("/api/tours", async (req, res) => {
  //   if (!tourName || !price || !imgURL) {
  //     res
  //       .status(500)
  //       .send({
  //         ok: false,
  //         error:
  //           "no tourName, price, imgURL from client on server in post(/api/tours)",
  //       });
  //   }
  try {
    console.log(req.body);
    var { tourName, price, imgURL } = req.body;
    if (!tourName || !price || !imgURL)
      throw new Error(
        "no tourName, price, imgURL from client on server in post(/api/tours)"
      );
    var tourDB = new TourModel({ tourName, price, imgURL });
    const check = await tourDB.save();
      res.send({ ok: true, tourDB });
  } catch (error) {
    res.status(500).send({ ok: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log("server is on port " + port);
});
