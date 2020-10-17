import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "../Signup/Signup.js";
import Landingpage from "../ContactInfo1/ContactInfo1.js";
import StepperPage from "../Stepper/StepperPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route path="/stepper">
          <StepperPage />
        </Route>
        <Route path="/landingpage">
          <Landingpage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
