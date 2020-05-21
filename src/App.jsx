import './App.css'
import React from 'react'

import Familia from './components/basicos/Familia'
import Card from './components/basicos/layout/Card'
import Aleatorio from './Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragamento from './components/basicos/Fragmento'


export default () => {
    return (

        <div className='App'>
            <h1> Fundamentos React </h1>

            <div className="Cards">

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                        <Familia  sobrenome="Ferreira"/>
                </Card>

                <Card titulo="#04 - Desafio Aleátorio" color="#080">
                    <Aleatorio min={1} max={100} />
                </Card>


                <Card titulo="#03 - Fragmento" color="#99a720c5">
                    <Fragamento />
                </Card>

                <Card titulo="#02 - Com Paramêtro">
                    <ComParametro
                        titulo='Segundo Componente'
                        aluno='Pedro Silva!'
                        nota={9.3}
                    />

                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#A965EB">

                    <Primeiro></Primeiro>

                </Card>

           </div>
        </div>

    )
}