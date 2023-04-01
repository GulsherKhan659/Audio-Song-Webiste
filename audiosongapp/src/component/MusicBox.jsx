import React from 'react'
import { Box, Card, CardContent, CardMedia } from '@mui/material'

function MusicBox() {
    return (
        <Card>
            <Box>
                <CardMedia position={'absolute'} component={'img'} height='120' alt='sd' src='https://c.saavncdn.com/104/Downtown-Wal-Gediyan-Punjabi-2019-20190805235840-500x500.jpg' />
            </Box>
            <CardContent sx={{ backgroundColor: 'rgb(25,118,210)', padding: '5px 10px', margin: '0', height: '25px' }}  >
                <Box component={'p'} paddingY={0.2} fontSize={'14px'} color={'white'} >
                    Tera Mera Pyar
                </Box>

                <Box component={'p'} paddingY={0.2} fontSize={'10px'} fontWeight={'bold'} color={'white'} >
                    By : Atif Aslam
                </Box>
            </CardContent>

        </Card>
    )
}

export default MusicBox