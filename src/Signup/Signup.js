import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import LandingPage from "../ContactInfo1/ContactInfo1.js";
import StepperPage from "../Stepper/StepperPage.js";

// import "./Signup.css";

class Signup extends Component {
    render() {
        return (
        //     <Button
        //     className="button-login"
        //     variant="contained"
        //     color="primary"
        //     onClick={() => <LandingPage/>}
        //   >
        //     Sign In!
        //   </Button>
        <Button variant = "contained" color = "primary" onClick={() => <StepperPage/>}>Login</Button>
        )
    }
}
export default Signup;