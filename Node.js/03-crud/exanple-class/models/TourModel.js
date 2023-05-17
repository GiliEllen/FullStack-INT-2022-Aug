var mongoose = require("mongoose")

var TourSchema = new mongoose.Schema({
    tourName: {
        type: String,
        required: true,
        uniqe: true
    },
    price: Number,
    imgSRC: String
});

var TourModel = mongoose.model("tours", TourSchema);

module.exports = TourModel;
