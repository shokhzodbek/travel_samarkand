import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return ( <
        >
        <
        nav className = 'navbar' >
        <
        div className = 'navbar-container' >
        <
        Link to = '/'
        className = 'navbar-logo'
        onClick = { closeMobileMenu } >
        SamTrV < img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Emblem_of_Samarkand.svg/1200px-Emblem_of_Samarkand.svg.png"
        alt = "" / >

        <
        /Link> <
        div className = 'menu-icon'
        onClick = { handleClick } >
        <
        i className = { click ? 'fas fa-times' : 'fas fa-bars' }
        /> <
        /div> <
        ul className = { click ? 'nav-menu active' : 'nav-menu' } >
        <
        li className = 'nav-item' >
        <
        Link to = '/'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Home <
        /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/photos'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        Photos <
        /Link> <
        /li> <
        li className = 'nav-item' >
        <
        Link to = '/about'
        className = 'nav-links'
        onClick = { closeMobileMenu } >
        About <
        /Link> <
        /li>

        <
        li >
        <
        Link to = '/sign-up'
        className = 'nav-links-mobile'
        onClick = { closeMobileMenu } >
        Sign Up <
        /Link> <
        /li> <
        /ul> {
            button && < Button buttonStyle = 'btn--outline' > SIGN UP < /Button>} <
                /div> <
                /nav> <
                />
        );
    }

    export default Navbar;