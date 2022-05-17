import React from 'react'

import { useEffect, useState } from 'react'

function Nuevos() {

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

    return (
        <div>
            {
                listaComidas.map(comidas => {
                    return (
                        <div className="nombre__alimento"> {comidas.nombre_alimento} </div>
                    )
                })
            }
        </div>
    )
}

export default Nuevos