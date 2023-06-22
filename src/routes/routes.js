const { Router } = require('express');
const { getMovie, getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const { getUsers, createUser, singIn, deleteUser } = require('../controllers/user-controller');
const router = Router();

//Peliculas
router.route('/')
     .get(getMovies)
     .post(createMovie)

router.route('/:id')
     .get(getMovie)
     .put(updateMovie)
     .delete(deleteMovie)


//Usuarios
router.get('/users', getUsers);
router.post('/users/register', createUser);
router.post('/users/login', singIn);
router.delete('/users/:idUser', deleteUser);

/*router.get('/', getMovies);
router.post('/add', createMovie);
router.put('/:idMovie', updateMovie);
router.delete('/:idMovie', deleteMovie);

*/

module.exports = router;