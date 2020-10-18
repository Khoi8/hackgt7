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
    constructor(props) {
        super(props);
        this.createLockers = this.createLockers.bind(this);
    }

    lockerindex(index) {
        this.props.lockerIndex(index);
    }

    goToDetails (index){
        // go to details page
        this.props.setDetail(); // change the number based on the case for this
        this.lockerindex(index);
        console.log(index);
    }

    goToAddMenu = e => {
        // go to add items menu screen
        this.props.setAddItem() ; // change the number based on the case for this
        e.preventDefault();
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

    createLockers(i){
        var check = (i[1] === ' (unuse)');
        if (check) {
            return <li key={i[0]} >
                        Locker: {i[0]} 
                        <br/>
                        Status: {i[1]}
                        <br/>
                        <Button
                                variant="contained"
                                onClick={() => this.goToAddMenu} 
                                > add Item
                        </Button>
                    </li>
        }else {
            return <li key = {i[0]}>
                        Locker: {i[0]} 
                        <br/>
                        Status: {i[1]}
                        <br/>
                        <Button
                                variant="contained"
                                onClick={() => this.goToDetails(i[0])} 
                                > details
                        </Button>
                </li>
        }
    
    }

    // createLockers(i) {
    //  var check = (i[1] === ' (unuse)');
    //  if (check){
    //     return <Button  key={i[0]}
    //             id = {i[0]}
    //             onClick={this.goToAddMenu}
    //          >
    //             Locker {i}
    //             </Button>
    //  }else{
    //     return <Button  key={i[0]}
    //         id = {i[0]}
    //         onClick={this.goToDetails(i[0])}
    //             >
    //                 Locker {i}
    //             </Button>
    //  }
     
    // }

    

    render() {
        var lockerEntries = this.props.lockerEnteries; 
        var lockerButton = this.props.lockerButtons;
  
        // this.itemsInLocker = this.props.items;
        var lockerList = lockerButton.map(this.createLockers);
        // returns a list of locker components
        // locker components will call the index from the locker[] in shoplist
        // to get the items stored inside them
        console.log(lockerButton);
        return (
           
            <div>

                <AppBar >
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            </IconButton>
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Food Lockers
                            </Typography>
                            </Container>
                        </Toolbar>                        
                </AppBar>
                <div className = 'header'>

                    <ul className='theList'>
                        {lockerList}
                    </ul>
                </div>

                

            </div>
        )
    }
}

export default Locker