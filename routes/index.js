const express = require("express");
const router = express.Router();
const homecontroller = require("../controllers/home");

router.get("/", homecontroller.homepage);

module.exports = router;
