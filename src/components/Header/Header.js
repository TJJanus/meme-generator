import React from 'react'
import image from '../../images/023.png';
import '../Header/Header.css';

function Header() {
    return (
        <header className='headerCont'>
            <img src={image} className='header--image' />
            <h1 className='header--title'>Meme Generator</h1>
            <h4 className='header--project'>TJ Janus - React Practice</h4>
        </header>
    )
}

export default Header
