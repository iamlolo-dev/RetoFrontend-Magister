import React from 'react'
import { useNavigate } from 'react-router-dom'

import { LogoMagister } from '../components/welcome/LogoMagister'

export const MatriculaWelcomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <div className='container mx-auto flex flex-col text-center items-center ' >

            <LogoMagister config='w-80 max-w-lg mt-4' />

            <span className='mt-12 mb-12 text-4xl font-bold'>
                ¡Comencemos con tu matrícula!
            </span>

            <span className='mt-0 mb-24 text-2xl w-80 font-medium'>
                Para comenzar a especializarte, vamos a realizar unas preguntas para darte el mejor servicio
            </span>

            <button
                className='bg-box-color hover:bg-hover-tp2 shadow-lg text-white font-bold py-2 px-14 rounded-lg text-lg'
                onClick={handleClick}
            >
                Comenzar
            </button>
            <button className='text-box-color mt-4 mb-4 text-1xl font-bold hover:text-hover-tp2'>
                Volver atrás
            </button>
        </div >
    )
}