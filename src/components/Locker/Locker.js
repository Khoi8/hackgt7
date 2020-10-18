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

    goToDetails = e => {
        e.preventDefault();
        // go to details page
        this.props.setStatePoint(0); // change the number based on the case for this
    }

    goToAddMenu = e => {
        e.preventDefault();
        // go to add items menu screen
        this.props.setStatePoint(0); // change the number based on the case for this
    }

    isLockerEmpty(locker){
        return !locker == null;
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    createLockers(i) {
     return <Button  key={Math.random(1)}>
                 Locker {i}
            </Button>
    }

    

    render() {
        var lockerEntries = this.props.lockerEnteries; 
        var lockerButton = this.props.lockerButtons;
  
        // this.itemsInLocker = this.props.items;
        var lockerList = lockerButton.map(this.createLockers);
        // returns a list of locker components
        // locker components will call the index from the locker[] in shoplist
        // to get the items stored inside them
        //console.log(lockerEntries);
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
                <div className = 'header'>

                    <ul className='theList'>
                        {lockerList}
                    </ul>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.continue}
                        >continue
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

export default Locker