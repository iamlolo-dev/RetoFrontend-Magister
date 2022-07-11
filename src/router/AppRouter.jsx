import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { MatriculaRoutes } from '../MagisterMatricula/routes/MatriculaRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<MatriculaRoutes />} />
            </Routes>
        </>
    )
}