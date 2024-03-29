import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cover } from './Cover'
import { Catalogue } from './Catalogue'
import { Delivery } from './Delivery'
import { Footer } from './Footer'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <h1>PKMarket</h1>
        <Cover />
        <Catalogue />
        <Delivery />
        <Footer />
    </React.StrictMode>
)