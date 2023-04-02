const express = require('express')

const Controller = require('../controller/song')
const img = require('../middleware/upload')

const Routee = express.Router()


Routee.get('/', Controller.getSong)
Routee.post('/admin/', img.upload.fields([
    { name: 'img', maxCount: 1 }, { name: 'audio', maxCount: 1 }
]), Controller.addSong)
Routee.delete('/admin/:id', Controller.delSong)
Routee.patch('/admin/:id', Controller.editSong)



exports.route = Routee
