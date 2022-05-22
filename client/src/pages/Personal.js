import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Personal() {

  const [listaPersonal, setListaPersonal] = useState([])

  const [personal, setPersonal] = useState([
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
    },
  ]);

  const loadPersonal = async () => {
    const response = await fetch('http://localhost:4000/Empleados')
    const data = await response.json()
    setListaPersonal(data)
    console.log(data)
  }

  useEffect(() => {
    loadPersonal()
  }, [])

  return (
    <React.Fragment>

      <div class="navbarMenu">
        <div class="navbarMenu__container">
          <Link to="/">
            <img src="images/quetzalcoatl2.png" alt="" height="75" />
          </Link>
          <div class="navbarMenu__toggle" id="mobMenu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbarMenu__menu">
            <li class="navbarMenu__item">
              <Link to="/" class="navbarMenu__links" id="home-page">Inicio</Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="global__container">
        <h1>Te presentamos a nuestra familia</h1>
      </div>

      {

        listaPersonal.map(personal => (
          <div class='personal__container' key={personal.num_empleado}>
            <div class='personal'>
              <img src='assets/images/usuario.png' alt='imagen del personal' class='personal--img' heigh='25px' width='25px' />
              <h2 class='personal__nombre'> {personal.nombre}  </h2>
              <p class='personal__cargo'> {personal.edad} </p>
            </div>
          </div>
        ))

      }

    </React.Fragment>
  )
}
