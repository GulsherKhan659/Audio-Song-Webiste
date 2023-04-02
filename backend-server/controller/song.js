const path = require('path')
const model = require('../model/song')


exports.getSong = async (req, res) => {
    const Song = await model.songModel.find({})
    res.json(Song)
}

exports.addSong = async (req, res) => {
    const imageName = req.files['img'][0].filename
    const audioName = req.files['audio'][0].filename



    const data = { ...req.body, createdAt: Date.now(), audio: audioName, image: imageName }
    const Song = await model.songModel(data)
    Song.save()
    console.log(data)
    res.redirect('/adminpanel/uploadsong.html')

}
exports.delSong = (req, res) => {
    res.send("DET -- >D< --")

}
exports.editSong = (req, res) => {
    res.send("UET -- >U< --")

}
