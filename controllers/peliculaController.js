const asyncHandler = require('express-async-handler')
const Pelicula = require('../models/peliculaModel')


const createMovie = asyncHandler(async (req, res) => {

    //desestructuramos el body request
    const { id,original_title,overview,
        popularity,poster_path,video,vote_average} = req.body

    //verificamos que recibamos la informacion que el modelo User necesita
    if (!id || !original_title ||!overview || !popularity || !poster_path  || !video ||!vote_average) {
        res.status(400)
        throw new Error('Favor de verificar que esten todos los datos')
    }

    //verificamos que no exista la pelicula en la coleccion
    const idExiste = await Pelicula.findOne({ id })
    if (idExiste) {
        res.status(400)
        throw new Error('Ese id ya fué registrado, la pelicula ya existe')
    }

    //creamos la pelicula
    const pelicula = await Pelicula.create({
        id,original_title,overview,
        popularity,poster_path,video,vote_average
    })

    //mandamos la respuesta de la funcion
    if (pelicula) {
        res.status(201).json({
            id,original_title,overview,
            popularity,poster_path,video,vote_average
        })
    } else {
        res.status(400)
        throw new Error('No se pudo crear la pelicula, datos incorrectos')
    }
})

const deleteMovie = asyncHandler(async (req, res) => {

    const pelicula = await Pelicula.findById(req.params.id)

    if (!pelicula) {
        res.status(400)
        throw new Error('Pelicula no encontrada')
    }

    await pelicula.deleteOne()

    res.status(200).json({ id: req.params.id })
})

const getMovies = asyncHandler(async (req, res) => {

    const peliculas = await Pelicula.find()

    res.status(200).json(peliculas)
})

module.exports = {
    createMovie, 
    deleteMovie, 
    getMovies
}