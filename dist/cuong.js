"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express = require('express');
const express = require("express");
const router = express.Router();
/* GET home page. */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express Cuong" });
});
module.exports = router;
//# sourceMappingURL=cuong.js.map