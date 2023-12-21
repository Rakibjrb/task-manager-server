const { model, Schema } = require("mongoose");

const benefits = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
});

const Benefits = model("Benefits", benefits, "benefits");
module.exports = Benefits;
