const express = require('express')
const cors = require('cors')


const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AudioSong_DB');

}



app.listen(PORT)