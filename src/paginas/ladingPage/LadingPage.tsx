import React from 'react'
import CarouselHome from '../../components/carousel/CarouselHome'
import Perguntas from '../../components/perguntas/Perguntas'
import Sobre from '../sobre/Sobre'


function LadingPage() {
    return (
        <>
            <CarouselHome />
            <Perguntas/>
            <Sobre/>
        </>
    )
}

export default LadingPage
