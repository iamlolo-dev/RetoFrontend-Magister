import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { MagisterApp } from './MagisterApp'
import './themes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MagisterApp />
        </BrowserRouter>
    </React.StrictMode>
)
