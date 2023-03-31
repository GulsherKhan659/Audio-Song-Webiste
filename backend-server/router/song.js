const express = require('express')

const Controller = require('../controller/song')

const Routee = express.Router()


Routee.get('/', Controller.getSong)
    .post('/', Controller.addSong)
    .patch('/:id', Controller.editSong)
    .delete('/:id', Controller.delSong)


exports.Song = Routee
