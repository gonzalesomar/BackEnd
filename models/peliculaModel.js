const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'Por favor teclea el id'],
        unique:true
    },
    original_title: {
        type: String,
        required: [true, 'Por favor teclea el titulo']
    },
    overview: {
        type: String,
        required: [true, 'Por favor teclea el resumen']
    },
    popularity: {
        type: Number,
        required: [true, 'Por favor teclea la popularidad']
    },
    poster_path: {
        type: String,
        required: [true, 'Por favor teclea el path del poste']
    },
    video: {
        type: String,
        required: [true, 'Por favor teclea si es video']
    },
    vote_average: {
        type: Number,
        required: [true, 'Por favor teclea el promedio']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Pelicula', userSchema)