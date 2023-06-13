const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('./database');

const app = express();

app.set('port', 3000);

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(express.static(path.join(__dirname,'/public')))
app.use(multer({ storage: storage }).single('imgMovie'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./routes/routes'));
app.listen(app.get('port') );


