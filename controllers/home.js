const express = require("express");

exports.homepage = (req, res) => {
    res.render("home");
};

exports.aboutmepage = (req, res) => {
    res.render("about");
};
