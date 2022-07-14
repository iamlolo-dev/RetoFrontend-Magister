import React from 'react'
import { AppRouter } from './router/AppRouter'
import { UseContextProvider } from './MagisterMatricula/contexts/StepperProvider'

export const MagisterApp = () => {
    return (
        <UseContextProvider>
            <AppRouter />
        </UseContextProvider>
    )
}