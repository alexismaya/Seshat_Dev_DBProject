import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function ActualizaAlimento() {

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
    }, [params.name])

    return (
        <React.Fragment>
            <div className='actualizar'>
                <h1> {comidas.nombre_alimento} </h1>
                <div className='form__container'>
                    <form className='form__actualiza'>
                        <div>
                            <label for='nombre_alimento'>Nombre del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='precio'>Precio del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='receta'>Receta del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='descripcion'>Descripcion del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='nombre_categoria'>Nombre de la categoria</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='desc_categoria'>Descripcion de la categoria</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='disponibilidad'>Disponibilidad del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                        <div>
                            <label for='nombre_alimento'>Nombre del alimento</label>
                            <input className='input__txt' name='nombre:alimento' />
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ActualizaAlimento