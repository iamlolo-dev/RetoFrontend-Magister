import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { LogoMagister } from '../components/Welcome/LogoMagister'

export const MatriculaWelcomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/steps');
    }

    return (
        <Box component='div' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
            
            <LogoMagister />

            <span className='h-header'>¡Comencemos con tu matrícula!</span>

            <span className='p-text'>Para comenzar a especializarte, vamos a realizar unas preguntas para darte el mejor servicio</span>

            <Button
                variant='contained'
                size='large'
                sx={{
                    width:' 200px',
                    borderRadius: '10px',
                    backgroundColor: '#0bc6fe',
                    boxShadow: '3',
                    textTransform: 'none',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                }}
                onClick={handleClick}
            >
                Comenzar
            </Button>
        </Box >
    )
}