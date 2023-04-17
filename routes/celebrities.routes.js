// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

router.get("/celebrities/create", function (req, res, next) {
  res.render("celebrities/new-celebrity");
});

router.post("/celebrities/create", function (req, res, next) {
  

  new Celebrity({
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  })
    .save()
    .then(function (newCelebrityFromDB) {
      res.redirect("/celebrities"); //si c'est req.redirect, il doit etre un route, il faut un slash au debut/
    })
    .catch((err) => {
      console.log("erreur lorsque de la creation d un celebrity");
      res.render("celebrities/new-celebrity"); //si c'est req.render, nom du fichier hbs en partant de views, pas de slash au debut
    });
});

router.get("/celebrities", function (req, res, next) {
  Celebrity.find()
    .then(function (allCelebritiesFromDB) {
      console.log("All celebritiesssss", allCelebritiesFromDB);
      res.render("celebrities/celebrities", {
        allCelebrities: allCelebritiesFromDB,
      })
    })
    .catch((err) => {
      console.log("oops", err);
      next(err);
    });
});

module.exports = router;
