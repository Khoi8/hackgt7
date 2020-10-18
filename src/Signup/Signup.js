import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import LandingPage from "../ContactInfo1/ContactInfo1.js";
import StepperPage from "../Stepper/StepperPage.js";
import api from "../data/api"

// console.log(api.createOrder("2020-05-08T14:26:48Z", "Good-Morning"))
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