import { Navigate, Route, Routes } from 'react-router-dom'

import { MatriculaWelcomePage, StepsHomePage } from '../pages'
import { Navbar } from '../../ui/components/Navbar'

export const MatriculaRoutes = () => {
    return (
        <>
            <Navbar />
                <Routes>
                    <Route path='start' element={<MatriculaWelcomePage />} />
                    
                    <Route path='home' element={<StepsHomePage />} />

                    <Route path='/' element={<Navigate to='/start' />} />
                </Routes>
        </>
    )
}
