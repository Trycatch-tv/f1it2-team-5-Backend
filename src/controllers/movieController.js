const Movies = require('../models/movieModel')
//const fs = require('fs-extra') //modulo deleiminacion
const fs = require('fs')
const path = require('path');
var filepath ='./public/'

const getMovi = async (req, res) => {
    const peliculas = await Movies.find()
    res.json(peliculas)
}

const createMovie = async (req, res) => {
    const { movie_title, movie_genero, movie_director, movie_year, movie_category, movie_synopsis } = req.body;
    const imgMovie= "uploads/" + req.file.filename;
    const movie = new Movies({
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
const getMovies = async (req, res) => {
    const pelicula = await Movies.findById(req.params.id)
    res.json(pelicula);
}



const updateMovie = async (req, res) => {
    const imgMovie = 'uploads/ '+ req.file.originalname;
    const { movie_title, movie_genero, movie_director, movie_year, movie_category, movie_synopsis } = req.body;
    await Movies.findByIdAndUpdate(req.params.id, {
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
    movies = await  Movies.findByIdAndDelete(req.params.id)
    res.json({message: 'La pelicula a sido eliminada'})
    
}


module.exports = {
    getMovi,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
}