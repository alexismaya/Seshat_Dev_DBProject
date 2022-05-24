import React from 'react'
import styled from 'styled-components'

export default function MasVendido() {

    document.body.style = 'background: linear-gradient(45deg, #8b1103, #885202);'

    return (
        <>
            <StyledTitulo>
                <h1>En el paladar de todos...</h1>
            </StyledTitulo>
            <StyledNombre className='nombre__platillo'>

                <img src="assets/images/maya.png" alt="icono__maya1" height="200px" width="200px" className='left__icon' />
                <h2>Nombre del Platillo</h2>
                <img src="assets/images/maya1.png" alt="icono__maya1" height="250px" width="250px" id='right__icon' />

            </StyledNombre>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,900&display=swap');
            </style>
        </>

    )
}

const StyledTitulo = styled.div`

    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 60px;
        font-weight: 600;
        background: linear-gradient(to right, #d38312, #a83279);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
    }

`;

const StyledNombre = styled.div`

    h2{
        text-align: center;
        place-self: center;
        margin-left: 10px;
    }

    justify-content: center;
    display: flex;
    flex-direction: row;
    width: 100%;

    img .left__icon{
        margin-top: 10px;
        margin-right: 10px;
        place-self: center;
    }

    img #right__icon{
    }

`