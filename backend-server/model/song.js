const moongose = require('mongoose')


const Song = moongose.Schema({
    createdAt: Date,
    title: String,
    artist: String,
    category: String,
    audio: String,
    image: String
})


exports.songModel = moongose.model('Song', Song)