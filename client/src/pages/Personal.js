import React from 'react'
import { useEffect, useState } from 'react'


export default function Personal() {

  const {personal, setPersonal} = useState({
    id: '',
    nombre_personal: '',
    ap_paterno_personal: '',
    cargo_personal: '',
    fecha_ingreso: '',
  })

  const { listaPersonal, setlistaPersonal } = useState([])

  const loadPersonal = async () => {
    const response = await fetch('http://localhost:4000/Personal')
    const data = await response.json()
    setlistaPersonal(data)

    console.log(data)
  }

  useEffect(() => {
    loadPersonal()
  }, [])

  return (
    <React.Fragment>

      <div class="global__container">
        <h1>Te presentamos a nuestra familia</h1>
      </div>

      {
        listaPersonal.map(personal <= (
          <div class='personal__container'>
          <div class='personal'>
            <img src='assets/images/usuario.png' alt='imagen del personal' class='personal--img' heigh='25px' width='25px'/>
            <h2 class='personal__nombre'> {personal.nombre_personal},' ',{personal.ap_paterno_personal} </h2>
            <p class='personal__cargo'>{personal.cargo_personal}</p>
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
