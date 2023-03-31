const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const rout = require('./router/song')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/asw/v1/', rout.Song)
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AudioSong_DB');

}



app.listen(PORT, () => {
    console.log("PORT", PORT)
})