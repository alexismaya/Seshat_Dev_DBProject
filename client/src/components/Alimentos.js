import React from 'react'

import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Alimentos() {

    function goToActualizarAlimento(id_comida){
        window.location.href = '/ActualizaAlimento/'+ id_comida
    }

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

    const initAniadirAlimento = e => {
        e.preventDefault()
        window.location.href = '/AniadirAlimento'
    }

    

    return (
        <div>
            return (
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
                        listaComidas.map(comidas => {
                            return (
                                <>

                                    <SplideSlide>
                                        <div className='alimento--card-G' key={comidas.id_comida}>
                                            <p>{comidas.nombre_alimento}</p>
                                            <div className='alimento--btns'>
                                                <input type='button' className='Actualizar__btn' value='Actualizar' onClick={goToActualizarAlimento(comidas.id_comida)}/>
                                                <input type='button' className='Borrar__btn' value='Borrar' />
                                            </div>
                                        </div>
                                    </SplideSlide>
                                </>
                            )
                        })
                    }
                </Splide>

            </div>
            )
        </div>
    )

}

export default Alimentos