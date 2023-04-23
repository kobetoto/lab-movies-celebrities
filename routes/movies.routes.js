// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/movies/create", function (req, res, next) {
  Celebrity.find()
    .then(function (allCelebritiesFromDB) {
      console.log("All celebritiesssss", allCelebritiesFromDB);
      res.render("movies/new-movie", { allCelebrities: allCelebritiesFromDB });
    })
    .catch((err) => {
      console.log("oops", err);
      next(err);
    });
});

router.post("/movies/create", function (req, res, next) {
  new Movie({
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: [req.body.cast],
  })
    .save()
    .then(function (newMovieFromDB) {
      console.log("movies created");
      res.redirect("/movies");
    })
    .catch((err) => {
      console.log("erreur lorsque de la creation d un movie", err);
      res.render("movies/new-movie", {});
    });
});

router.get("/movies", function (req, res, next) {
  Movie.find()
    .then(function (allMoviesFromDB) {
      console.log("All moviesssss", allMoviesFromDB);
      res.render("movies/movies", {
        allMovies: allMoviesFromDB,
      });
    })
    .catch((err) => {
      console.log("oops", err);
      next(err);
    });
});

module.exports = router;
