const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
    {
        movie_title: { type: String, unique: true, require: true },
        movie_genero: { type: String, require: true },
        movie_director: { type: String, require: true },
        movie_year: { type: String, require: true },
        movie_synopsis: { type: String, require: true },
        movie_rate: { type: String,require: true },
        movie_category: { type: String, require: true },
        imgMovie: { type: String, default: '' }
    },
    {
        versionKey: false,timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;