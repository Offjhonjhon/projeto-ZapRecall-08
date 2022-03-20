import logo from './../../assets/img/logo-pequeno.png'

import './logo.css'

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo}></img>
            <p>ZapRecall</p>
        </div>
    );
}