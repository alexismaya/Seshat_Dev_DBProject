import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'


export default function Carrito() {

    document.body.style = 'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';

    const [fecha,setFecha] = useState([
        {
            current_date: '',
        }
    ])

    const [listaComidas, setListaComidas] = useState([])

    const [listaTicket, setListaTicket] = useState([])

    const [comidas, setComidas] = useState([
        {
            id_identificador: '',
            precio: '',
            receta: '',
            nombre_alimento: '',
            disponibilidad: '',
            nombre_categoria: '',
            descripcion: '',
            desc_categoria: '',
            tipo_categoria: '',
            nivel_dificultad: '',
            sin_alcohol: '',
            con_alcohol: '',

        }
    ]);

    const [numOrden, setNumOrden] = useState([
        {
            count: '',
        }
    ])

    const [empleado, setEmpleado] = useState([
        {
            id_empleado: 1,
            edad: '',
            sueldo: '',
            fecha_nacimiento: '',
            rfc_empleado: '',
            nombre: '',
            ap_paterno: '',
            ap_materno: '',
            calle: '',
            numero: '',
            colonia: '',
            codigo_postal: '',
            estado: '',
        }
    ])

    const loadComidas = async () => {

        const response = await fetch('http://localhost:4000/Comidas')
        const data = await response.json()
        setListaComidas(data)
    }

    const loadCantidad = async () => {
        const response = await fetch('http://localhost:4000/CantOrdenes')
        const data = await response.json()
        setNumOrden(data)
        console.log(data)
    }

    const loadEmpleado = async () => {
        const responseA = await fetch('http://localhost:4000/CantOrdenes')
        const dataA = await responseA.json()
        let empleado = await Math.floor(Math.random() * ((Number(dataA.count) + 3) - 1)) + 1;
        const responseB = await fetch(`http://localhost:4000/Empleado/${empleado}`)
        const dataB = await responseB.json()
        setEmpleado(dataB)
    }

    const handleAgregaCarrito = async (id) => {

        const response = await fetch(`http://localhost:4000/Comidas/${id}`)
        const data = await response.json()

        setListaTicket([...listaTicket,data])

    }

    const loadDate = async () => {
        const response = await fetch('http://localhost:4000/Fecha')
        const data = await response.json()
        const date = data.current_date
        const subDate = date.substring(0,10)
        data.current_date = subDate
        setFecha(data)
    }

    useEffect(() => {
        loadComidas()
        loadCantidad()
        loadEmpleado()
        loadDate()
    }, [], [])

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
                <div className='order--info'>
                    <div className='order__container'>
                        <div>
                            <div className='cont__container'>
                                <h2>Esta orden será atendida por: </h2>
                                <h2> {empleado.nombre} {empleado.ap_paterno} {empleado.ap_materno} </h2>
                            </div>
                            <div className='cont__container'>
                                <h2>Precio Total:</h2>
                                <h2>$$</h2>
                            </div>
                            <div className='cont__container'>
                                <h2>Fecha:</h2>
                                <h2> {fecha.current_date} </h2>
                            </div>
                            <div className='cont__container'>
                                <h2>Folio:</h2>
                                <h2> {Number(numOrden.count) + 1} </h2>
                            </div>
                        </div>
                        <div className='ticket--order'>
                            <h2>---Ticket---</h2>
                            {
                                listaTicket.map((comidas) => {
                                    return(
                                        <h2> {comidas.nombre_alimento}........{comidas.precio} </h2>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='lista__container'>
                        <h2>Lista de productos</h2>
                        <div className='productos__container'>
                            <div>
                                <div className='comidas__container' >
                                    <h3>Nuestro menú</h3>

                                    <Splide options={{
                                        perPage: 4,
                                        arrows: false,
                                        pagination: false,
                                        drag: 'free',
                                        gap: '5rem',
                                    }}>
                                        {
                                            listaComidas.map(comidas => {
                                                return (
                                                    <SplideSlide key={comidas.id_identificador}>
                                                        <div className='alimento--card' id='shadow__carrito' key={comidas.id_identificador} onClick={() => handleAgregaCarrito(comidas.id_identificador)}>
                                                            <h2>{comidas.nombre_alimento}</h2>
                                                            <img src='../../assets/images/hamburguesa.png' alt={comidas.nombre_alimento} />

                                                        </div>
                                                    </SplideSlide>
                                                )
                                            })
                                        }
                                    </Splide>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FondoCarrito>
    )
}

const FondoCarrito = styled.div`

    .ticket--order{
        margin-left: 400px;
        text-align: center;
        place-self: right;
    }

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
        flex-direction: row;

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

