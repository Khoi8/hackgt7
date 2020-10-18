import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

export class ItemsDetail extends Component {

    constructor(props) {
        super(props);
        this.generateDetails = this.generateDetails.bind(this);
    }

    //reset the state and back to the default page (shopList)
    continue = e => {
        //e.preventDefault();
        this.props.nextStep();
    }

    //step - 1
    back = e => {
            e.preventDefault();
            this.props.prevStep();
    }

    generateDetails(item) {
        return <li key={item.key} >
                    Item: {item.text[0]} 
                    <br/>
                    Quantity: {item.text[1]}
                    <br/>
                </li>
    }

    render() {
        var itemEntries = this.props.lockers;
        var lockerIndex = this.props.lockerindex;
        var itemlist = [];
        var templist = [];

        // console.log(itemEntries);
        // console.log(lockerIndex);
        // console.log(itemEntries[])

        itemlist = itemEntries[lockerIndex][2];
        // console.log(itemlist);
        templist = itemlist.map(this.generateDetails);
        
        // for (index = 0; index < itemEntries.length; index++) {
        //     itemlist[index] = itemEntries[index][3];
        // }
        return (
            <div>
                <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            </IconButton>
                            <Container maxwidth= "sm">
                            <Typography align="center" variant="h6" color="inherit">
                                Locker Detail
                            </Typography>
                            </Container>
                        </Toolbar>                        
                </AppBar>
            <div className = "header">
                <Box>
                    <br/>
                    <h1>ItemsDetail</h1>                         
                </Box>
                <div>
                    <ul className='theList'>
                        {templist}
                    </ul>
                </div>
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

export default ItemsDetail
