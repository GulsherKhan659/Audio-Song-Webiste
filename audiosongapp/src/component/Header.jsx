import React, { useState } from 'react'
import { Box, Stack, AppBar, InputBase } from '@mui/material'
import SearchPalete from './SearchPalete'

function Header() {

    const [search, setSearch] = useState('')



    return (
        <>
            <AppBar position='sticky' sx={{ zIndex: '1' }}  >
                <Stack direction={'row'} paddingY={1} paddingX={4} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack>
                        <Box component={'div'} fontSize={'44px'}>ASW</Box>
                        <Box fontSize={'10px'}>Audio Song Website</Box>
                    </Stack>
                    <Box >
                        <Box paddingX={2} width={350} bgcolor={'white'} sx={{
                            borderRadius: '5px'
                        }}>
                            <InputBase onChange={(e) => setSearch(e.target.value)} fullWidth={true} value={search} placeholder='Search...' />
                        </Box>

                        {search.length !== 0 ? <SearchPalete /> : <></>}
                    </Box>

                    <Stack direction={'row'} spacing={4}>
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