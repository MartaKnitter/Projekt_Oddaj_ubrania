import React, {Component} from "react";

import "./icons.scss"
import {Link, NavLink} from "react-router-dom";



class Icons extends Component {
    render() {
        return (
            <>
                <div className="icons-title-container" id="ocochodzi">
                    <h1 className="icons-title">Wystarczą 4 proste kroki</h1>
                    <img src={require('../assets/Decoration.svg')} alt="" className="icons-decor"/>
                </div>
                <div className="icons-container">
                    <div className="one-icon-container">
                        <img src={require('../assets/Icon-1.svg')} alt="" className="icons"/>
                        <h4 className="icons-subtitle">Wybierz rzeczy</h4>
                        <div className="icons-line"/>
                        <p className="icons-paragraph">ubrania, zabawki, sprzęt i inne</p>
                    </div>

                    <div className="one-icon-container">
                        <img src={require('../assets/Icon-2.svg')} alt="" className="icons"/>
                        <h4 className="icons-subtitle">Spakuj je</h4>
                        <div className="icons-line"/>
                        <p className="icons-paragraph">skorzystaj z worków na śmieci</p>
                    </div>

                    <div className="one-icon-container">
                        <img src={require('../assets/Icon-3.svg')} alt="" className="icons"/>
                        <h4 className="icons-subtitle">Zdecyduj komu chcesz pomóc</h4>
                        <div className="icons-line"/>
                        <p className="icons-paragraph">wybierz zaufane miejsce</p>
                    </div>

                    <div className="one-icon-container">
                        <img src={require('../assets/Icon-4.svg')} alt="" className="icons"/>
                        <h4 className="icons-subtitle">Zamów kuriera</h4>
                        <div className="icons-line"/>
                        <p className="icons-paragraph">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="icons-button">
                    <Link to="/login" className="button-give"><NavLink to="/oddaj-rzeczy" className="header-button">Oddaj rzeczy</NavLink></Link>
                    {/*<button className="button-give">Oddaj rzeczy</button>*/}
                </div>
            </>
        )
    }
}


export default Icons;
