import React, { Component } from 'react'
import FormItemDetails from './FormItemDetails'
import Confirm from './Confirm'
import Success from './Success'

export class ItemForm extends Component {
    state = {
        step: 1,
        itemName: '',
        quantity: '',
    }


    //first step

    firstStep = () => {
        const{ step } = this.state;
        this.setState({
            step : 1
        })
    }

    //next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    //prev step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { itemName, quantity} = this.state;
        const values = { itemName, quantity}
       
        switch(step) {
            case 1:
                return (
                    <FormItemDetails
                    nextStep = { this.nextStep }
                    handleChange = { this.handleChange }
                    values = { values }
                    />
                )
            case 2:
                return (
                    <Confirm
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                    />
                )
            case 3:
                return <Success
                    firstStep = {this.firstStep}
                />
        }
    }
}

export default ItemForm
