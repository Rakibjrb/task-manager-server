const { model, Schema } = require("mongoose");

const features = new Schema({
  img: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

const Features = model("Features", features, "features");
module.exports = Features;
