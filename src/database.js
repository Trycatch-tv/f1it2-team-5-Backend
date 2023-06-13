const mongoose = require('mongoose');
DB_URI='mongodb://localhost/social-movies'
mongoose.connect(DB_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4
    }).then(db => console.log('DB is connected')).catch(err => console.log(err));