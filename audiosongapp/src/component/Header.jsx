import React, { useState } from 'react'
import { Box, Stack, AppBar, InputBase } from '@mui/material'

import CloseIcon from '@mui/icons-material/Close';

import SearchPalete from './SearchPalete'

function Header() {

    const [search, setSearch] = useState('')

    const removeSearchText = () => {
        setSearch('')
    }



    return (
        <>
            <AppBar position='sticky' sx={{ zIndex: '1' }}  >
                <Stack direction={'row'} paddingY={1} paddingX={4} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack>
                        <Box component={'div'} fontSize={'44px'}>ASW</Box>
                        <Box fontSize={'10px'}>Audio Song Website</Box>
                    </Stack>
                    <Box >
                        <Box paddingX={2} width={350} bgcolor={'white'} sx={

                            {
                                borderRadius: '5px',
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }


                        }>
                            <Stack direction={'row'} justifyContent={'center'}>
                                <InputBase onChange={(e) => setSearch(e.target.value)} fullWidth={true} value={search} placeholder='Search...' />
                                {search.length !== 0 ?
                                    <Box paddingY={0.7} >
                                        <CloseIcon onClick={() => removeSearchText()} sx={{ color: "rgb(150,150,150)" }} />
                                    </Box> : <></>}

                            </Stack>
                        </Box>

                        {search.length !== 0 ? <SearchPalete /> : <></>}
                    </Box>

                    <Stack direction={'row'} spacing={4} sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}>
                        <Box>
                            Music
                        </Box>
                        <Box>
                            Pod Cast
                        </Box>
                        <Box>
                            Go Pro
                        </Box>
                    </Stack>

                </Stack>
            </AppBar >

        </>
    )
}

export default Header