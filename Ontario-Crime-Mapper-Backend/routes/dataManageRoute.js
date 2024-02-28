const router = require("express").Router();
const dataManagement = require("../middleware/dataManagement");

router.get("/getTweets", dataManagement.getTweets);

router.get("/TPC", dataManagement.getTPCData);

module.exports = router;
