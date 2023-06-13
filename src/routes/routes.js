const { Router } = require('express');
const { getMovies, createMovie,deleteMovie } = require('../controllers/movie-controller');
const router = Router();


router.get('/', getMovies);
router.post('/add', createMovie);
router.delete('/idMovie', deleteMovie)


module.exports = router;