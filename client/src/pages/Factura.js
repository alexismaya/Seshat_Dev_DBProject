import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components'




function Factura() {

  let params = useParams();

  const [ordenes, setOrdenes] = useState([])

  const loadOrdenes = async () => {
    const response = await fetch(`https://localhost:4000/GetFactura/${params.name}`)
    const detailResponse = await response.json()
    setOrdenes(detailResponse)
  }

  useEffect(() => {
    loadOrdenes()
  }, [params.name])

  return (
    <StyledFactura>
      <h1>Meh</h1>
    </StyledFactura>
  )
}

const StyledFactura = styled.div`



`

export default Factura