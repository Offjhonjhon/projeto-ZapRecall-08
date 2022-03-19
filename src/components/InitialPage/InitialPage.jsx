
import setPage from "../App/App"

import logo from './../../assets/img/logo.png'

import './initialPage.css'

export default function InitialPage() {
    return(
        <>
            <img src={logo}/>
            <h1>ZapRecall</h1>
            <button onClick={setPage}>Iniciar Recall!</button>
        </>
    )
}

