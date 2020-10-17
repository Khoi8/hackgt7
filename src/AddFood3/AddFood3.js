import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LandingPage from "../ContactInfo1/ContactInfo1.js";
// import "./Signup.css";

class AddFood3 extends Component {
    render() {
        return (
            <Button
            className="button-login"
            variant="contained"
            color="primary"
            onClick={() => <LandingPage/>}
          >
            Food!
          </Button>
        )
    }
}
export default AddFood3;