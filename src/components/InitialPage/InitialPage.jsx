import logo from './../../assets/img/logo.png'
import { useState } from 'react'
import './initialPage.css'

export default function InitialPage({pageIndex, goalAndDeck }) {
    const deck = [
            {question: 'O que é JSX?',  
             answer: 'Uma extensão de linguagem do JavaScript'
            },
            {question: 'O React é __',
             answer: 'Uma biblioteca JavaScript para construção de interfaces'
            },
            {question: 'Componentes devem iniciar com __',
             answer: 'Letra maiúscula'
            },
            {question: 'Podemos colocar __ dentro do JSX', 
             answer: 'Expressões'
            },
            {question: ' O ReactDOM nos ajuda __',
             answer: 'Interagindo com a DOM para colocar componentes React na mesma'
            },
            {question: 'Usamos o npm para __',
             answer: 'Gerenciar os pacotes necessários e suas dependências'
            },
            {question: 'Usamos props para __',
             answer: 'Passar diferentes informações para componentes '
            },
            {question: 'Usamos estado (state) para __',
             answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
            },
        ]
       

        const [deckStatus, setDeckStatus] = useState(deck)
    return(
        

        <div className="initial-page">
            <img src={logo}></img>
            <h1 className="title">ZapRecall</h1>
            <button onClick={() => {pageIndex("deck-page") ; goalAndDeck(deckStatus.sort(() => Math.random() - 0.5))}}> Iniciar Recall!</button>
        </div>
    );    
}