import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

// Pentru Home, About si majoritatea paginilor ce vor fi create in urmatoarele cursuri, avem nevoie de un header
// si un footer. Headerul va contine navbar-ul, deci link-urile utile catre alte pagini. Momentan, vom vrea ca
// header-ul sa contina link-uri catre Home si Login
function Header() {
    return(
        // <div className="container-max-width"> // asa adaugam un o clasa dintr-un fisier de-al nostru de-al nostru de css
        <div className="header d-flex justify-content-between align-items-center mb-5">
            <img src={logo} alt="Logo" />
            <div>
                <Link to='/login'>Login</Link>
                <ShoppingCart />
            </div>

        </div>
    );
}

export default Header;