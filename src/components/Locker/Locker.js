import React, { Component} from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { SettingsSystemDaydreamOutlined } from '@material-ui/icons';

export class Locker extends Component {

    //reset the state and back to the default page (shopList)
    continue = e => {
        //e.preventDefault();
        // this.props.nextStep();
    }

    goToDetails = e => {
        e.preventDefault();
        // go to details page
    }

    goToAddMenu = e => {
        e.preventDefault();
        // go to add items menu screen
    }

    isLockerEmpty(locker){
        return !locker == null;
    }

    createLockers(i) {
     return <Button  key={Math.random(1)}>
                 Locker {i}
            </Button>
    }

    

    render() {
        // this.itemsInLocker = this.props.items;
        var lockerEntries = this.props.lockerEnteries; 
        var lockerList = lockerEntries.map(this.createLockers);
        // returns a list of locker components
        // locker components will call the index from the locker[] in shoplist
        // to get the items stored inside them
        console.log(lockerEntries);
        return (
           
            <div>

                <AppBar >
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            </IconButton>
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Lockers
                            </Typography>
                            </Container>
                        </Toolbar>                        
                </AppBar>
                
                
                    {lockerList}
                

            </div>
        )
    }
}

export default Locker