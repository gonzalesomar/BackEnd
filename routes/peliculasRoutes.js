const express = require('express')
const router = express.Router()
const { createMovie, deleteMovie, getMovies,updateMovies } = require('../controllers/peliculaController')

router.post('/create', createMovie)
router.delete('/delete/:id', deleteMovie)
router.get('/movies',  getMovies)

module.exports = router