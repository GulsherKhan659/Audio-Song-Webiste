import React, { useContext } from 'react'
import { Container, Grid } from '@mui/material'
import SongContext from '../context/songContext'
import MusicBox from '../component/MusicBox'

function Home() {
    const SongCtx = useContext(SongContext)
    console.log(SongCtx.songs)

    const Songs = () => SongCtx.songs.map((song, i) => {
        return (
            <Grid item xs={6} md={2} key={i} paddingX={5} justifyContent={'center'}>
                <MusicBox artist={song.artist} title={song.title} img={song.image} />

            </Grid>
        )
    })
    return (
        <Container>
            <Grid container spacing={2} marginY={2}>
                <Songs />


            </Grid>
        </Container>
    )
}

export default Home