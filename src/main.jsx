import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { Cover } from './Cover'
import { Catalogue } from './Catalogue'
import { Delivery } from './Delivery'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Cover />
        <Catalogue />
        <Delivery />
    </React.StrictMode>
)