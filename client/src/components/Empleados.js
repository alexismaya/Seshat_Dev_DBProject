import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import React, { useEffect, useState } from 'react'

function Empleados() {

    const [empleado,setEmpleado] = useState([
        {
            num_empleado: '',
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

    const [listaEmpleados,setListaEmpleados] = useState([])

    const loadEmpleados = async () => {
        const response = fetch('')
        const data = await response.json()
        setListaEmpleados(data)
    }

    useEffect(() => {
        loadEmpleados()
    },[])

    const handleAdd = e => {
        window.location.href = '/AgregarEmpleado';
    }

    const handleUpdate = (id) => {
        window.location.href = `/ActualizarEmpleado/${id}`
    }

    const handleDelete = async (id) => {
        
    }


  return (
    <div className='empleados__container'>
        <h1>Lista de empleados</h1>
        <div>
            <input type='button' className='agregarEmpleado__btn' value='Agregar' />
        </div>
        <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {
                        listaEmpleados.map((empleado) => {
                            <React.Fragment key={empleado.num_empleado}>
                                <SplideSlide>
                                    <div className='empleado--card'>
                                        <p> {empleado.nombre}+{empleado.ap_paterno}+{empleado.ap_materno} </p>
                                        <div className='empleado__btns'>
                                            <input type='button' value={'Actualizar Datos'} />
                                            <input type='button' value='Borrar empleado' />
                                        </div>
                                    </div>
                                </SplideSlide>
                            </React.Fragment>
                        })
                    }
                </Splide>
    </div>
  )
}

export default Empleados