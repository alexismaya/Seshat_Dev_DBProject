import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

function DetallesComida() {

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

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`http://localhost:4000/Comidas/${params.name}`)
        const detailData = await data.json()
        setComidas(detailData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name])

  return (
    <div className="detalles__titulo" key='comidas.id_comida'> {comidas.nombre_alimento} </div>
  )
}

export default DetallesComida