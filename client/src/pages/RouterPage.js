import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import Personal from './Personal'
import Comidas from './Comidas'
import DetallesComida from './DetallesComida'
import Gerente from './Gerente'

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Menu' element={<Menu />} />
                    <Route path='/Personal' element={<Personal />} />
                    <Route path='/Comidas' element={< Comidas />} />
                    <Route path='/DetallesComida/:name' element={<DetallesComida />} />
                    <Route path='/Gerente' element={<Gerente />} />
                </Routes>
            </Router>
        </div>
    )
}
