import { Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui/components/Navbar'
import { MatriculaWelcomePage, StepsPage } from '../pages'

export const MatriculaRoutes = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Routes>
                <Route path='home' element={<MatriculaWelcomePage />} />
                <Route path='steps' element={<StepsPage />} />


                    <Route path='/' element={<Navigate to='/home' />} />
                </Routes>
            </Container>
        </>
    )
}
