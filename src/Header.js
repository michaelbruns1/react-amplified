//create a Header component that will be exported to App.js
import logo from './logo.svg';
import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt = "logo" />
            <SearchBar />
            
        </div>
    )
}

            
export default Header;