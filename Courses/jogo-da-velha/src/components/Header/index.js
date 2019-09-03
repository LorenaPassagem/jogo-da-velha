import React from 'react';
import './style.css'
import Sobre from '../../objects/Sobre/index'
import Logo from '../../objects/Logo/index';
import Menu from '../../objects/Menu/index';

const Header = () => (
    <header className="header">
        <Logo />
        <Sobre />
        <Menu />
    </header>
)

export default Header;