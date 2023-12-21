const Features = require("../../../models/features/features");

const getFeatures = async (req, res, next) => {
  try {
    const features = await Features.find({});
    res.send(features);
  } catch (error) {
    next(error);
  }
};

module.exports = getFeatures;
