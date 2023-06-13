const Movie = require('../models/movie.model');

const getMovies = async (req, res) => {
    await Movie.find().then(allmovies => res.json(allmovies));
}

const createMovie = async (req, res) => {
    const {movie_title, movie_genero, movie_director, movie_year, movie_synopsis, movie_rate, movie_category } = req.body;
    const imgMovie = 'uploads/' + req.file.filename;
    await Movie.create({
        movie_title: movie_title,
        movie_genero: movie_genero,
        movie_director: movie_director,
        movie_year: movie_year,
        movie_synopsis: movie_synopsis,
        movie_rate:movie_rate,
        movie_category: movie_category,
        imgMovie: imgMovie
    })
    res.json({ messade: 'Movies created' });
}

const deleteMovie = async (req, res) => {
    const idMovie = req.params;
    await Movie.findAndDelete(idMovie).then(res.json({ message: 'Delete movie' }));
}


module.exports = {
    getMovies,
    createMovie,
    deleteMovie
}