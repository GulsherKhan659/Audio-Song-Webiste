const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path');


const song = require('./router/song')

const app = express()


const PORT = process.env.PORT || 5000





app.use(cors())
app.use(express.json())

app.use('/adminpanel', express.static(__dirname + '/public/'))

app.use('/asw/v1/', song.route)




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AudioSong_DB');

}



app.listen(PORT, () => {
    console.log("PORT", PORT)
})