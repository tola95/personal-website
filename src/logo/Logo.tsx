import React from 'react';
import './Logo.css';
import circle from './circle.png';

function Logo() {
    return (<div className="Logo">
        <img className="LogoImage" src={circle} width="80" height="80" alt="omotola.dev" style={{animation: `spin 3s linear infinite`}}/>
        <h1 className="LogoName">omotola.dev</h1>
    </div>);
}

export default Logo;