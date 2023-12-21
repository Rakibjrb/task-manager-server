const Benefits = require("../../../models/benefits/benefits");

const getBenefits = async (req, res, next) => {
  try {
    const benefits = await Benefits.find({});
    res.send(benefits);
  } catch (error) {
    next(error);
  }
};

module.exports = getBenefits;
