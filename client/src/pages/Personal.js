import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Personal() {

  const [listaPersonal, setListaPersonal] = useState([])

  const [personal, setPersonal] = useState([
    {
      id_personal: '',
      nombre_personal: '',
      ap_paterno_personal: '',
      cargo_personal: '',
      fecha_ingreso: '',
    },
  ]);

  const loadPersonal = async () => {
    const response = await fetch('http://localhost:4000/Personal')
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
          <div class='personal__container' key={personal.id_personal}>
            <div class='personal'>
              <img src='assets/images/usuario.png' alt='imagen del personal' class='personal--img' heigh='25px' width='25px' />
              <h2 class='personal__nombre'> {personal.nombre_personal} {personal.ap_paterno_personal} </h2>
              <p class='personal__cargo'> {personal.cargo_personal} </p>
            </div>
            <div class='personal__ingreso'>
              <p>Desde: {personal.fecha_ingreso} </p>
            </div>
          </div>
        ))

      }

    </React.Fragment>
  )
}
