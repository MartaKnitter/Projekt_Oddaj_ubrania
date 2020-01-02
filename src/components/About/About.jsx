import React, {Component} from "react";

import "./about.scss"
// import {Link} from "react-router-dom";


class About extends Component {
    render() {
        return (
            <>
                <div className="about-container" id="about">
                    <div className="about-text">
                        <h1 className="about-title">O nas</h1>
                        <img src={require('../assets/Decoration.svg')} alt="" className="about-decor"/>
                        <p className="about-paragraph">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={require('../assets/Signature.svg')} alt="" className="about-signature"/>
                    </div>
                </div>
            </>
        )
    }
}


export default About;
