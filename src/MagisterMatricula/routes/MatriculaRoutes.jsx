import { Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MatriculaWelcomePage } from '../pages'

export const MatriculaRoutes = () => {
    return (
        <Container maxWidth='xl'>
            <Routes>
                <Route path='home' element={<MatriculaWelcomePage />} />

                <Route path='/' element={<Navigate to='/home' />} />
            </Routes>
        </Container>
    )
}
