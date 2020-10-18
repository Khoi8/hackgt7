import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

export class ThankYou extends Component {

    //reset the state and back to the default page (shopList)
    continue = e => {
        //e.preventDefault();
        this.props.nextStep();
    }


    render() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: '#0e8a22' }}>
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            </IconButton>
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Thank you
                            </Typography>
                            </Container>
                        </Toolbar>                        
                </AppBar>
            <div className = "header">
                <Box>
                    <br/>
                    <h1>Thank you for purchase!</h1>                         
                </Box>
                <Button 
                    variant="contained"
                    color="primary"
                    onClick={this.continue}
                    >Start a new cart
                </Button>     
            </div>
            </div>
        )
    }
}

export default ThankYou
