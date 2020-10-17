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

    createLockers(locker) {
        return <li key={locker.key} >
                    <Button style = {{width: 300, height: 200, padding: 10, margin:100}}
                        onClick = {() => {

                            var testOccupiedString = 'empty'; // pull in something from API

                            if (testOccupiedString === 'empty') {
                                // go to add items menu step
                                this.goToAddMenu();
                            } else if (testOccupiedString === 'Occupied') {
                                // got to Details page
                                this.goToDetails();
                            }
                        }}
                    >
                    {/* This takes in input from new locket object in Shoplist */}
                    Locker Number: {locker.key} 
                    <br/>
                    {/*New object will have the status that will be updated*/}
                    Status: {locker.text[1]}
                    <br/>
                    Time Placed in locker: {Date.now()}
                    <br/>
                    </Button>
                </li>
    }

    

    render() {
        // this.itemsInLocker = this.props.items;
        var lockerEntries = this.props.entries; 
        var lockerList = lockerEntries.map(this.createLockers);
        // returns a list of locker components
        // locker components will call the index from the locker[] in shoplist
        // to get the items stored inside them
        return (
            <div>

                <AppBar position="static">
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
                {/* unordered list of lockers */}
                <li>
                    {lockerList}
                </li>

            </div>
        )
    }
}

export default Locker