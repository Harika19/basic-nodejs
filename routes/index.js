const express = require("express");
const router = express.Router();
const homecontroller = require("../controllers/home");

//router.use("/", homecontroller.homepage);
router.get("/", console.log('testtt'));
module.exports = router;
