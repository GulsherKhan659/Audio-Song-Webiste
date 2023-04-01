import React from 'react'
import { Box, Stack } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <>
            <Stack direction={'row'} justifyContent={'center'} sx={{ backgroundColor: 'primary.dark', padding: '15px', color: 'white' }} alignItems={'center'}>
                <CopyrightIcon></CopyrightIcon><Box paddingX={0.5}>developergulsherkhan@gmail.com</Box>

            </Stack>
        </>
    )
}

export default Footer