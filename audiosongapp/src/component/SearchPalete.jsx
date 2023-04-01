import React from 'react'
import { Box, Card, Container, Grid } from '@mui/material'
import MusicBox from './MusicBox'
import LoadingAnimation from '../animation/loadingAnimation'

import '../animation/boxAnimation.css'

function SearchPalete() {
    const idx = [0, 1, 2, 3, 4, 5, 6, 7]
    const SearchResult = () => idx.map((e, i) => {
        return (
            <Grid item xs={3} key={i} >
                <Box marginX={3} marginY={1} >
                    <MusicBox />
                </Box>
            </Grid>
        )
    })
    setTimeout((e) => {
        console.log("dasdsd", e)
    }, [10000])

    setTimeout(() => {
        console.log("Xsd")
    }, [500])

    const SearchWaiting = () => idx.map((e, i) => {
        return (
            <Grid item xs={3} key={i + e} >
                <Box className='box-element' marginX={3} height={140} marginY={1} >
                </Box>

            </Grid>


        )
    })
    return (
        <Box sx={{ zIndex: '15', left: '20%', position: 'fixed', width: '65%', marginTop: '2px' }}>
            <Card>
                <Container sx={{ paddingY: '15px' }}>

                    <LoadingAnimation />

                    <Grid container spacing={2}>

                        <SearchWaiting />
                        {/* <SearchResult /> */}


                    </Grid>
                </Container>

            </Card>
        </Box>
    )
}

export default SearchPalete