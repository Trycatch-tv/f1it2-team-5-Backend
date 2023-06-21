const {Schema, model} = require('mongoose');

/*const movieSchema =new Schema(
    {
        movie_title: { type: String, require: true },
        movie_genero: { type: String, require: true },
        movie_director: { type: String, require: true },
        movie_year: { type: String, require: true },
        movie_synopsis: { type: String, require: true },
        movie_rate: { type: String,require: true },
        movie_category: { type: String, require: true },
        imgMovie: { type: String}
    },
    {
        versionKey: false
       
    }
);*/

const movieSchema =new Schema(
    {
        movie_title: String,
        movie_genero: String,
        movie_director: String,
        movie_year: String,
        movie_category: String,
        movie_synopsis: String,
        imgMovie: String
    },
    {
        timestamps:true
       
    }
);

module.exports = model('Movies', movieSchema);
