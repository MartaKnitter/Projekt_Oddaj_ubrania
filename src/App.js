import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";

import "./App.css";
import Home from "./components/Home/Home";
import HeaderLogin from "./components/Panel/HeaderLogin";
import HeaderSignUp from "./components/Panel/HeaderSignUp";
import OCoChodzi from "./components/Pages/OCoChodzi";
import OddajRzeczy from "./components/OddajRzeczy/OddajRzeczy"
import Contacts from "./components/Pages/Contacts";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/login" component={HeaderLogin} />
          <Route  path="/signup" component={HeaderSignUp} />
          <Route  path="/ocochodzi" component={OCoChodzi} />
            <Route  path="/contact" component={Contacts} />
            <Route path="/oddaj-rzeczy" component={OddajRzeczy}/>
        </Switch>
      </HashRouter>
  );
}

export default App;