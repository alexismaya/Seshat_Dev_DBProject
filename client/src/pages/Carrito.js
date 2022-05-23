import React from 'react'
import styled from 'styled-components'

export default function Carrito() {

    document.body.style = 'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';

    return (
        <FondoCarrito >
            <nav class="navbar">
                <div class="navbar__container">
                    <a href="#home" id="navbar__logo">
                        <img src="assets/images/quetzalcoatl2.png" alt="" height="75" />
                    </a>
                    <div class="navbar__toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="navbar__menu">
                        <li class="navbar__item">
                            <a href="#home" class="navbar__links" id="home-page">Inicio</a>
                        </li>
                        <li class="navbar__item">
                            <a href="#about" class="navbar__links" id="about-page">Alimentos</a>
                        </li>
                        <li class="navbar__item">
                            <a href="#services" class="navbar__links" id="services-page">Servicios</a>
                        </li>
                        <li class="navbar__items">
                            <a href="#contact" class="navbar__links" id="contacts-page">Contactos</a>
                        </li>
                        <li class="navbar__btn">
                            <a href="#sign-up" class="button" id="signup">Registrarme</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className='carrito__background' id='car__bg'>
                <h1>Este es tu carrito para ordenar</h1>
                <div className='order__container'>
                    <div  className='cont__container'>
                    <h2>Esta orden será atendida por: </h2>
                    <h2> Nombre del empleado </h2>
                    </div>
                    <div className='cont__container'>
                        <h2>Precio Total:</h2>
                        <h2>$$</h2>
                    </div>
                    <div className='cont__container'>
                        <h2>Fecha:</h2>
                        <h2>AAAA-MM-DD</h2>
                    </div>
                    <div className='cont__container'>
                        <h2>Folio:</h2>
                        <h2>XXXXX</h2>
                    </div>
                    <div className='lista__container'>
                        <h2>Lista de productos</h2>
                        <div className='productos__container'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </FondoCarrito>
    )
}

const FondoCarrito = styled.div`
    .carrito__background {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
        
    h1{
        color: #fff;
        font-size: 40px;
        margin-bottom: 10px;
    }
    }

    .order__container{
        display: flex;
        flex-direction: column;

        .cont__container{
            display: flex;
            flex-direction: row;
        }
        h2{
            color: #fff;
            text-align: left;
            margin-top: 15px;
            margin-left: 5px;
        }

        .lista__container{
            h2{
                text-align: center;
            }
        }
    }

`;

