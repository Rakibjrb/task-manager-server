const router = require("express").Router();
const getBenefits = require("../../controllers/api/benefits/benefits");

router.get("/api/benefits", getBenefits);

module.exports = router;
