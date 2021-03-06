import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

export class PaymentMethod extends Component {
    //step + 1
    continue = e => {
        e.preventDefault();
        this.props.addItemsToLocker();
        this.props.nextStep();
    }

    //step - 1
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div>
                <AppBar style={{ backgroundColor: '#0e8a22' }}
                //position="static"
                >
                        <Toolbar variant="dense">
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Payment Method
                            </Typography>
                            </Container>
                        </Toolbar>                        
                </AppBar>
            <div className = "header">
                <Box>
                    <br/>
                    <h1>Which payment method will you like?</h1>                         
                </Box>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                    >Cash
                </Button>   
                <Button 
                    variant="contained"
                    onClick={this.continue}
                    >Credit/Debit Card
                </Button>   
                <Button 
                    variant="contained"
                    onClick={this.back}
                    >back
                </Button> 
            </div>
            </div>
        )
    }
}

export default PaymentMethod
