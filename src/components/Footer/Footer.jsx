import React, {Component} from "react";

import "./Footer.scss"



class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer-container">
                    <p className="footer-title">Copyright by Coders Lab</p>
                    <div className="footer-icons">
                        <img src={require('../assets/Instagram.svg')} alt="" className="footer-instagram"/>
                        <img src={require('../assets/Facebook.svg')} alt=""/>
                    </div>
                </div>
            </>
        )
    }
}


export default Footer;
