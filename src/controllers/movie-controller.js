const Movie = require('../models/movie.model');

const getMovies = async (req, res) => {
    await Movie.find().then(allmovies => res.json(allmovies));
}

const createMovie = async (req, res) => {
    const {movie_title, movie_genero, movie_director, movie_year, movie_synopsis, movie_rate, movie_category } = req.body;
    const imgMovie = 'uploads/' + req.file.filename;
    const movie = new Movie({ movie_title, movie_genero, movie_director, movie_year, movie_synopsis, movie_rate, movie_category, imgMovie });
    await movie.save().then(res.json({ messade: 'Movies created' }));
    /*await Movie.create({
        movie_title: movie_title,
        movie_genero: movie_genero,
        movie_director: movie_director,
        movie_year: movie_year,
        movie_synopsis: movie_synopsis,
        movie_rate:movie_rate,
        movie_category: movie_category,
        imgMovie: imgMovie
    })*/
}

const updateMovie = async (req, res) => {
    const auxId = req.params.idMovie;
    const {movie_title, movie_genero, movie_director, movie_year, movie_synopsis, movie_rate, movie_category } = req.body;
    const imgMovie = 'uploads/' + req.file.filename;
    await Movie.findByIdAndUpdate({ _id: auxId },
        {
            $set: {
                movie_title: movie_title,
                movie_genero: movie_genero,
                movie_director: movie_director,
                movie_year: movie_year,
                movie_synopsis: movie_synopsis,
                movie_rate: movie_rate,
                movie_category: movie_category,
                imgMovie: imgMovie
            }
        }
    ).then(res.json({ Message: 'Movie Update' })).catch((message = 'error') => { res.json({ Message: message }) });
}

const deleteMovie = (req, res) => {
    const auxId = req.params;
    console.log(auxId);
    Movie.findByIdAndDelete({ _id: auxId }).then(res.json({ message: 'Delete movie' }));
}


module.exports = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}