const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema ({
    title: String,
    genre: String,
    plot: String,
    cast: [Number]
})


module.exports = mongoose.model('Movie', movieSchema);