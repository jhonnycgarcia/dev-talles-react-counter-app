import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css'

// import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <FirstApp title='Hola Mundo' /> */}
        <CounterApp value={10} />
    </StrictMode>,
)