import React, {Component} from "react";

import "./HeaderNav.scss"

import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class HeaderNav extends Component {
    render() {
        return (
            <div>
                <ul className="header-login">
                    <li className="header-menu-login"><NavLink to="/login">Zaloguj</NavLink></li>
                    <li className="header-menu-login"><NavLink to="/signup">Zajerestruj się</NavLink></li>
                </ul>
                <ul className="header-menu">
                    <li className="header-menu-element"><NavLink to="/" className="start" >Start</NavLink></li>
                    <li className="header-menu-element"><Link to="ocochodzi" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li className="header-menu-element" ><Link to="about" spy={true} smooth={true} duration={500}>O nas</Link></li>
                    <li className="header-menu-element"><Link to="foundation" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link></li>
                    <li className="header-menu-element"><Link to="contacts" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </div>
        )
    }
};

export default HeaderNav;