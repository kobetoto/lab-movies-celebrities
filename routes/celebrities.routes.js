// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", function (req, res, next) {
  res.render("../views/celebrities/new-celebrity");
});

router.post("/celebrities/create", function (req, res, next) {
  req.body;

  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .save()
    .then(function (newCelebrityFromDB) {
      res.render("../views/celebrities/celebrities.hbs");
    })
    .catch((err) => {
      console.log("erreur lorsque de la creation d un celebrity");
      res.render("../views/celebrities/new-celebrity");
    });

  router.get("/celebrities/celbrities", function (req, res, next) {
    Celebrity.find()
      .then(function (allCelebritiesFromDB) {
        console.log("All celebrities", allCelebritiesFromDB);
        res.render("../views/celebrities/celebrities.hbs"),
          {
            allCelebrities: allCelebritiesFromDB,
          };
      })
      .catch((err) => {
        console.log("oops", err);
        next(err);
      });
  });
});

module.exports = router;
