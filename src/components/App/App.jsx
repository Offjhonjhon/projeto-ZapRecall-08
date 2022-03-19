import React from 'react';
import InitialPage from "../InitialPage/InitialPage"

import './../../css/style.css'
import './../../css/reset.css'



export default function App() {
    const [app, setApp] = React.useState(<InitialPage />);
    
    function setPage() {
        setApp('Teste');
    }

    return (
        <div className='initialPage'>
            {app}
        </div>
    )
}