const express = require('express');
const cors = require('cors');
const multer = require('multer');
//const morgan = require('morgan');
const path = require('path');
//const upload = multer({ dest: '../src/public/uploads' })
require('./database');
const { v4: uuid } = require('uuid');

const app = express();

//config port 
app.set('port', process.env.PORT || 4000);



//config multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase() );
    }
});

//middlewares 

app.use(express.static(path.join(__dirname,'/public')))
app.use(multer({
     storage: storage,
     fileFilter: (req, file,cb)=>{
        const filetypes = /jpeg|png|jpg/;
        const mimetype =filetypes.test(file.mimetype);
        const extname =filetypes.test(path.extname(file.originalname));
        if (mimetype && extname){
            return cb(null, true);
        }
        cb("Error: Archivo incorrecto")
     }
     }).single('imgMovie') );
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Rutas
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi api rest full')
})


//routes
app.use('/social-movies', require('./routes/routes'));

//Start server
app.listen(app.get('port'), () =>{
    console.log('El servidor se esta ejecutando en el puerto: ', app.get('port'))
} );