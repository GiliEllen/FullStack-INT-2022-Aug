var mongoose = require("mongoose");

var TourSchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true,
  },
  price: Number,
  imgURL: String,
});

var TourModel = mongoose.model("tours", TourSchema);

module.exports = TourModel;
