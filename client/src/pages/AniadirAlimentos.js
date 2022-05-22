import React from 'react'

import { useState } from 'react'

function AniadirAlimentos() {

    const [comida, setComida] = useState({
        precio: '',
        receta: '',
        nombre_alimento: '',
        disponibilidad: 'TRUE',
        nombre_categoria: '',
        descripcion: '',
        desc_categoria: '',
        tipo_categoria: '',
        nivel_dificultad: '',
        sin_alcohol: '',
        con_alcohol: '',

    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(comida)

        const res = await fetch('http://localhost:4000/comidas', {
            method: "POST",
            body: JSON.stringify(comida),
            headers: { "Content-type": "application/json" },
        })
        const data = await res.json()
        console.log(data)

    }

    const handleChange = (e) => {
        setComida({ ...comida, [e.target.name]: e.target.value })
    }


    return (
        <React.Fragment>
            <div className='aniadir__background'>
                <h1>Introduce los datos</h1>
                <form class='aniadir__form' onSubmit={handleSubmit}>
                    <div>
                        <label className='input__txt' for='nombreAlimento'>Nombre del alimento:</label>
                        <input onChange={handleChange} className='aniadir__input' name='nombre_alimento' id='nombreAlimento' />
                    </div>
                    <div>
                        <label className='input__txt' for='descripcionAlimento'>Descripcion del alimento:</label>
                        <input onChange={handleChange} className='aniadir__input' name='descripcion' id='descripcionAlimento' />
                    </div>
                    <div>
                        <label className='input__txt' for='recetaAlimento'>Receta del alimento:</label>
                        <input onChange={handleChange} className='aniadir__input' name='receta' id='recetaAlimento' />
                    </div>
                    <div>
                        <label className='input__txt' for='precioAlimento'>Precio del alimento:</label>
                        <input onChange={handleChange} className='aniadir__input' name='precio' />
                    </div>
                    <div>
                        <label className='input__txt' for='categoriaAlimeno'>Categoria del alimento:</label>
                        <input onChange={handleChange} className='aniadir__input' name='nombre_categoria' />
                    </div>
                    <div>
                        <labe className='input__txt' for='descCategoria'>Descripcion de Categoria:</labe>
                        <input onChange={handleChange} className='aniadir__input' name='desc_categoria' />
                    </div>
                    <input type='submit' value='Agregar' className='agregar__btn' />
                </form>
            </div>


        </React.Fragment>
    )
}



export default AniadirAlimentos