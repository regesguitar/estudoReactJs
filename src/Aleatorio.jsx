import React from 'react'

export default (props) => {
    const {min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (

        <div>
            <h2> Valor Aleatório </h2>

            <p><strong>Valor Mínimo: </strong> {min}
            </p>

            <p><strong>Valor Máximo: </strong> {max}
            </p>

            <p><strong>Valor Escolhido: </strong> {aleatorio}
            </p>

        </div>


    )

}


//DESAFIO NÚMERO ALEATÓRIO
//  1 CRIAR UM NOVO COMPONENTE - OK
//  2 PEGAR UM VALOR MÁXIMO E PASSAR UM VALOR MINIMO - OK
//  3 SORTEAR O NUMERO  ENTRE O MAXIMO E O MINIMO DE FORMA ALEÁTÓRIO - OK
//  export default function ComParametro(props)  -  OK {

