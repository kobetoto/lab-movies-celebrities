// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", function (req, res, next) {
    Celebrity.find()
        .then(function (allCelebritiesFromDB) {
          console.log("All celebrities", allCelebritiesFromDB);
          res.render("../views/movies/new-movie"),
            {
              allCelebrities: allCelebritiesFromDB,
            };
        })
        .catch((err) => {
          console.log("oops", err);
          next(err);
        });
    res.render("../views/movies/new-movie");
    
  });
  
  router.post("/movies/create", function (req, res, next) {
    req.body;
  
    new Movie({
        title: req.body.title,
        genre: req.body.genre,
        plot: req.body.plot,
        // cast: [req.body.cast]
    })
      .save()
      .then(function (newMovieFromDB) {
        res.render("../views/movies/movies.hbs");
      })
      .catch((err) => {
        console.log("erreur lorsque de la creation d un movie");
        res.render("../views/movies/new-movie");
      });
  
     });

module.exports = router;