import { Box } from '@mui/material'
import React from 'react'

export const LogoMagister = () => {
    return (
        <Box
            component='img'
            sx={{
                height: 'auto',
                width: 350,
                maxWidth: '350px',
                mt: '4rem',
            }}
            src={'../../../../assets/matricula_IMG/logo.png'}
            alt='logoMagister'
        />

    )
}
