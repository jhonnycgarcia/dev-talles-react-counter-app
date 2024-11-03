import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { App } from './App'
import { FirstApp } from './FirstApp'

import './style.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        <FirstApp title='Pedro' subtitle='El primer app'/>
    </StrictMode>,
)