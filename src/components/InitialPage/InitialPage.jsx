import Logo from "../Logo/Logo"
import Deck from "../Deck/Deck"

import logo from './../../assets/img/logo.png'

import './initialPage.css'

export default function InitialPage({callback}) {
    return(
        <>
        <div className='initialPage'>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <button onClick={() => callback(<><Logo /> <Deck/></>)}>Iniciar Recall!</button>
        </div>
        </>
    )
}

