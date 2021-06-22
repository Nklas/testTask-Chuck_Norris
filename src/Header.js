import React from 'react';
import './App.css';
import logo from './images/logo.png';

function Header() {
    return (
        <header style={{backgroundColor: '#422ED4', color: 'white', height: 59}}>
            <div style={{display: 'flex', alignItems: 'center', paddingLeft: 160}}>
                <img src={logo} style={{margin: '8px 0px'}} alt="Logo"/>
                <h2 style={{marginLeft: 10, fontFamily: 'Raleway', fontWeight: 800, fontSize: 16}}>
                    Chuck Norris
                </h2>
            </div>
        </header>
    );
}

export default Header;
