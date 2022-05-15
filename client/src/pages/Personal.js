import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Personal() {

  const { listaPersonal, setPersonal } = useState([])

  const loadPersonal = async () => {
    const response = await fetch('path')
    const data = await response.json()
    setPersonal(data)
  }

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>

      <div class="global__container">
        <h1>Te presentamos a nuestra familia</h1>
      </div>

      {
        <div class='personal__container'>
          <div class='personal'>
            <img src='assets/images/usuario.png' alt='imagen del personal' class='personal--img' heigh='25px' width='25px'/>
            <h2 class='personal__nombre'>No hay empleados </h2>
            <p class='personal__cargo'>...</p>
          </div>
          <div class='personal__ingreso'>
            <p>Desde: ...</p>
          </div>
        </div>
      }

    </React.Fragment>
  )
}
