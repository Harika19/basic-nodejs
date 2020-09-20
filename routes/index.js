const express = require("express");
const router = express.Router();
const homecontroller = require("../controllers/home");

router.get("/", homecontroller.homepage);
router.get("/about", homecontroller.aboutmepage);

module.exports = router;
