import React from 'react'

import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Alimentos() {

    

    const [listaComidas, setListaComidas] = useState([])

    const [comidas, setComidas] = useState([
        {
            id_comida: '',
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

    const loadComidas = async () => {

        const response = await fetch('http://localhost:4000/Comidas')
        const data = await response.json()
        setListaComidas(data)
    }

    useEffect(() => {
        loadComidas()
    }, [])

    const initActualizarAlimento = e => {
        e.preventDefault()
        window.location.href = '/ActualizarAlimento'
    }

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:4000/Comidas/${id}`,{
            method: 'DELETE',
        })
        setListaComidas(comidas.filter(comidas => comidas.id_comida !== id))
    }

    const initAniadirAlimento = e => {
        e.preventDefault()
        window.location.href = '/AniadirAlimento'
    }

    

    return (
        <div>
            
            <div className='comidas__container' >
                <h3>Lista de alimentos</h3>

                <div >
                    <input type='button' className='Agregar__btn' value='Agregar' onClick={initAniadirAlimento} />
                </div>

                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {
                        listaComidas.map((comidas) => (
                                <React.Fragment key={comidas.id_comida}>

                                    <SplideSlide key={comidas.id_comida}>
                                        <div className='alimento--card-G' key={comidas.id_comida}>
                                            <p>{comidas.nombre_alimento}</p>
                                            <div className='alimento--btns'>
                                            <Link to={"/ActualizarAlimentos/" + comidas.id_comida}><input type='button' className='Actualizar__btn' value='Actualizar' /></Link>
                                                <input type='button' className='Borrar__btn' value='Borrar' onClick={() => handleDelete(comidas.id_comida)}/>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                </React.Fragment>
                            
                        ))
                    }
                </Splide>

            </div>
            
        </div>
    )

}

export default Alimentos