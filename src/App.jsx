import React from 'react';
import InitialPage from "./InitialPage"



export default function App() {
    const [app, setApp] = React.useState(<InitialPage />);
    console.log(app);
    return (
        <div className='initialPage'>
            {app}
        </div>
    )
}