const { Router } = require('express');
const { getMovi, getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const { getUsers, createUser, deleteUser } = require('../controllers/user-controller');
const router = Router();

//Peliculas
router.route('/')
     .get(getMovi)
     .post(createMovie)

router.route('/:id')
     .get(getMovies)
     .put(updateMovie)
     .delete(deleteMovie)


//Usuarios
router.get('/users', getUsers);
router.post('/users/register', createUser);
router.delete('/users/:idUser', deleteUser);

/*router.get('/', getMovies);
router.post('/add', createMovie);
router.put('/:idMovie', updateMovie);
router.delete('/:idMovie', deleteMovie);

*/

module.exports = router;