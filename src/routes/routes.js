const { Router } = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movie-controller');
const { getUsers, createUser, deletUser } = require('../controllers/user-controller');
const router = Router();


router.get('/', getMovies);
router.post('/add', createMovie);
router.put('/:idMovie', updateMovie);
router.delete('/:idMovie', deleteMovie);

router.get('/users', getUsers);
router.post('/users/register', createUser);
router.delete('/idMovie', deleteMovie)


module.exports = router;