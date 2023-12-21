const router = require("express").Router();
const getFeatures = require("../../controllers/api/features/features");

router.get("/api/features", getFeatures);

module.exports = router;
