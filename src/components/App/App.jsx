import React from 'react';
import InitialPage from "../InitialPage/InitialPage"
import Deck from '../Deck/Deck'
import Logo from '../Logo/Logo';


import './../../css/style.css'
import './../../css/reset.css'



export default function App() {
    const [app, setApp] = React.useState(<InitialPage callback={(appState) =>{setApp(appState)}}/>)

    return (
        <>
            {app}
        </>
    )
}