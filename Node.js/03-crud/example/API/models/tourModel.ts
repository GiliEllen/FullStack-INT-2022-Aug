import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    requierd: [true, "tour must have a name"]
  },
  price: String,
  imgSRC: String
});

const TourModel = mongoose.model("tours", TourSchema);

export default TourModel;
