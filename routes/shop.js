const express = require("express");
const router = express.Router();
const path = require("path");

const rootDir = require("../util/path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminData.products;
  //this code render shop.pug file instead of shop.html
  res.render("shop", { prods: products, docTitle: "shop" });
});

module.exports = router;
