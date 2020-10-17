import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export class Success extends Component {
    first = e => {
        e.preventDefault();
        this.props.firstStep()
    }
    render() {
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
                                Success
                            </Typography>
                        </Toolbar>                        
                    </AppBar>

                    <h1> Submussion Confirmed </h1>

                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.first}>Enter New Item
                    </Button> 
                        
                   
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Success