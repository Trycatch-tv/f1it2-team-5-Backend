const Movie = require('../models/movieModel')
const {unlink} = require('fs-extra') //modulo deleiminacion
const path = require('path');

const getMovies = async (req, res) => {
    const allMovies = await Movie.find();
    res.json(allMovies);
}

const createMovie = async (req, res) => {
    const { movie_title, movie_genero, movie_director, movie_year, movie_category, movie_synopsis } = req.body;
    const imgMovie= "uploads/" + req.file.filename;
    const movie = new Movie({
        movie_title: movie_title,
        movie_genero: movie_genero,
        movie_director: movie_director,
        movie_year: movie_year,
        movie_category: movie_category,
        movie_synopsis: movie_synopsis,
        imgMovie: imgMovie 
    });
    await movie.save();
    res.json({ message: 'Movies created' });
}
const getMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    res.json(movie);
}



const updateMovie = async (req, res) => {
    const imgMovie = 'uploads/ '+ req.file.originalname;
    const { movie_title, movie_genero, movie_director, movie_year, movie_category, movie_synopsis } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, {
        movie_title,
        movie_genero,
        movie_director,
        movie_year,
        movie_category,
        movie_synopsis,
        imgMovie

    })
    res.json({ Message: 'Movie Update' });
}
const deleteMovie= async(req, res)=>{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    unlink(path.resolve('f1it2-team-5-Backend/src/public' + movie.imgMovie));
    res.json({message: 'La pelicula a sido eliminada'})
    
}


module.exports = {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}