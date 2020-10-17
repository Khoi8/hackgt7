import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class FormItemDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values: {itemName, quantity}, handleChange } = this.props;
        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography align="center" variant="h6" color="inherit">
                                Enter Item Details
                            </Typography>
                        </Toolbar>                        
                    </AppBar>
                    <br/>
                    <TextField
                        label = "Enter Item Name"
                        variant = "outlined"
                        onChange={handleChange('itemName')}
                        values={itemName}
                    />
                    <br/>
                    <br/>
                    <TextField
                        label = "Enter the quantity"
                        variant = "outlined"
                        onChange={handleChange('quantity')}
                        values={quantity}
                    />
                    <br/>
                    <br/>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.continue}>Continue
                    </Button>     
                        
                   
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default FormItemDetails
