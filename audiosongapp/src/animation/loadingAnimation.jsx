import React from 'react'
import './loadingAnimation.css'

import { Stack } from '@mui/material'

function LoadingAnimation() {
    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                <div className="loading-element">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="loading-element">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="loading-element">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Stack>
        </>
    )
}

export default LoadingAnimation