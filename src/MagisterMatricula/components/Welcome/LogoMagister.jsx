import { Box } from '@mui/material'
import React from 'react'

export const LogoMagister = ({config}) => {
    return (
        <Box
            component='img'
            sx={config}
            src={'../../../../assets/matricula_IMG/logo.png'}
            alt='logoMagister'
        />

    )
}
