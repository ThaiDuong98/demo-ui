import { Backdrop, Box, LinearProgress } from '@mui/material'
import React from 'react'

const Loading = ({ isLoading, hideLoading }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={hideLoading}
        >
            <Box sx={{ width: '20%' }}>
                <LinearProgress />
            </Box>
        </Backdrop>
    )
}

export default Loading
