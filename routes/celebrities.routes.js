// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/celebrities/new-celebrity", function (req, res, next) {
  res.render("../views/celebrities/new-celebrity");
});

module.exports = router;
