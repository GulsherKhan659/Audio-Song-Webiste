import React from 'react'
import { Box, Card, CardContent, CardMedia } from '@mui/material'

function MusicBox({ title, artist, img }) {
    return (
        <Card>
            <Box>
                <CardMedia position={'absolute'} component={'img'} height='100' alt={title} src={'http://localhost:5000/adminpanel/aswstorage/' + img} />
            </Box>
            <CardContent sx={{ backgroundColor: 'rgb(25,118,210)', padding: '5px 10px', margin: '0', height: '25px' }}  >
                <Box component={'p'} paddingY={0.2} fontSize={'14px'} color={'white'} >
                    {title}
                </Box>

                <Box component={'p'} paddingY={0.2} fontSize={'10px'} color={'white'} >
                    By : <b>{artist}</b>
                </Box>
            </CardContent>

        </Card>
    )
}

export default MusicBox