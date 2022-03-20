import React from 'react';
import './deck.css'

import arrow from './../../assets/img/Vector.png'
import curvedArrow from './../../assets/img/setinha.png' 

const deckJs = [
    {index: 1,question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript'},
    {index: 2,question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces'},
    {index: 3,question: 'Componentes devem iniciar com __', answer: 'letra maiúscula'},
    {index: 4,question: 'Podemos colocar __ dentro do JSX', answer: 'expressões'},
    {index: 5,question: ' O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma'},
    {index: 6,question: 'Usamos o npm para __', answer: 'Usamos o npm para __'},
    {index: 7,question: 'Usamos props para __', answer: 'passar diferentes informações para componentes '},
    {index: 8,question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'},
];

export default function Deck() {
    return (
        <div className='deck'>
            {deckJs.map(card => <Card index={`Pergunta ${card.index}`} question={card.question} answer={card.answer}  />)}
        </div>
    );
}

function Card(props) {
    const {index, question, answer} = props;
    

    const [card, setCard] = React.useState(
        <div className="card">
            {index}
            <Arrow callbackCard={() => setCard(<FrontCard question={question}  callback={() => setCard(<FrontCard question={answer} />)} />)} />
        </div>);

    return(
    <>
        {card}
    </>
    )
}

function FrontCard({question, callback}) {
    return(
        <div className='flashcard'>
            <p>{question}</p>
            <CurvedArrow callback={callback} />
        </div>
        );
}
function BackCard({answer}) {
    return(
        <div className='flashcard'>
            <p>{answer}</p>
        </div>
        );
}

function Arrow({callbackCard, callbackVisibility})  {
    
    return (
        <div className='arrow' >
            <img src={arrow} onClick={() => callbackVisibility()} onClick={() => callbackCard()}></img>
        </div>
    );      
}

function CurvedArrow({callback, visibility}) {
    return(
        <>
            <img src={curvedArrow} onClick={() => callback()}></img>
        </>
        );
}

function Options() {
    return ( 
        <>
        </>
    );
}
