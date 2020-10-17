import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // process form , sent data to api //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        // process form , sent data to api //
        this.props.prevStep();
    }
    render() {
        const { values: {itemName, quantity}} = this.props;
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
                                Confirm Item Data
                            </Typography>
                        </Toolbar>                        
                    </AppBar>
                    <br/>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                    <List>
                        <ListItem>
                        <ListItemText
                            primary="Item Name"
                            secondary={itemName}
                        />
                        </ListItem>

                        <ListItem>
                        <ListItemText
                            primary="quantity"
                            secondary={quantity}
                        />
                        </ListItem>

                    </List> 
                    </Grid>                   
                                        
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.continue}>Add
                    </Button>   

                    <br/>
                    <br/>
                    <Button 
                        variant="contained"
                        color="none"
                        onClick={this.back}>back
                    </Button>   
                        
                   
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Confirm