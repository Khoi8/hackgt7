import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

export class Confirmation extends Component{

    //step + 1
    continue = e => {
        e.preventDefault();
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
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            </IconButton>
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Confirmation
                            </Typography>
                            </Container>
                        </Toolbar>                        
                    </AppBar>
            <div className = 'header'>
                    <Box>
                        <br/>
                        <h1>Is everything you want in your cart?</h1>                         
                    </Box>
                
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.continue}>Continue
                    </Button>   
                    <Button 
                        variant="contained"
                        onClick={this.back}>Back
                    </Button> 
                </div>                             
            </div>
            )
    }
    
}

export default Confirmation