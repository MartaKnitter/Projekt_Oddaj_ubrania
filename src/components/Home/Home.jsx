import React, {Component} from "react";

import Header from "../Header/header"
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import HeaderNav from "../HeaderNav/HeaderNav"
import Icons from "../Icons/Icons";
import About from "../About/About"
import Fundactions from "../Fundactions/Fundactions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer"


class Home extends Component {
    render() {
        return <div>
            <Header/>
            <ThreeColumns />
            <HeaderNav/>
            <Icons />
            <About />
            <Fundactions />
            <Contact />
            <Footer />
        </div>;
    }
}


export default Home;

