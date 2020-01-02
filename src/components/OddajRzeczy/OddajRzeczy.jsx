import React, {Component} from "react";

import HeaderForm from "../Form/Header/HeaderForm"
import Alert from "../Form/Alert/Alert";
import HeaderNav from "../HeaderNav/HeaderNav"
import Step_One from "../Form/Steps/Step_One/Step_One"
import Fundactions from "../Fundactions/Fundactions";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer"


class OddajRzeczy extends Component {
    render() {
        return <div>
            <HeaderForm />
            <HeaderNav />
            <Alert/>
            <Step_One/>
            <Contact/>
            <Footer />
        </div>;
    }
}


export default OddajRzeczy;

