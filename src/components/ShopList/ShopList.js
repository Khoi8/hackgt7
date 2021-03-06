import React, { Component } from 'react'
import Confirmation from '../Confirmation/Confirmation'
import Checkout from '../Checkout/Checkout'
import ShopItems from '../ShopItems/ShopItems'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import ThankYou from '../ThankYou/ThankYou';
import Catalog from '../Catalog/Catalog';
import Locker from '../Locker/Locker';
import ItemsDetail from '../ItemsDetail/ItemsDetail'

export class ShopList extends Component {

    //intialize the arrays 
    constructor(props) {
        super(props);
        
        this.state = {
            step: 0,
            items:[],
            catalog: [],
            isLoaded: false,
            lockers: [[0," (unuse)",[]],[1," (unuse)",[]],[2," (unuse)",[]],[3," (unuse)",[]],[4," (unuse)",[]],[5," (unuse)",[]]],
            lockerButtons:[[0, " (unuse)"],[1, " (unuse)"],[2, " (unuse)"],[3, " (unuse)"],[4, " (unuse)"],[5, " (unuse)"]],
            lockerindex:0

        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);   
        this.addItemButton = this.addItemButton.bind(this);
        this.lockerIndex = this.lockerIndex.bind(this);
        this.addItemsToLocker = this.addItemsToLocker.bind(this);
    }

    //step + 1
    continue = e => {
        e.preventDefault();
        this.nextStep();
       // this.addItemsToLocker()
    }

    //next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    
    //prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    setDetail = () => {
        this.setState({
            step: 1
        });
    }

    setAddItem = () => {
        this.setState({
            step: 2
        });
    }
    
    //fetech the catalog items from the api
    // componentDidMount() {
    //     fetch(process.env.REACT_APP_BACKEND_API_URL + "/Catalog")
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 catalog: json,
    //             })
    //         })    
    // }

    // createLocker(e) {
    //     //create map with items and key
    //     var newLocker = {
    //         itemArrayIndex: 0,
    //         key: Date.now()
    //     };
    //     e.preventDefault();
    // }

    //add items from the input
    addItem(e) {
        const priceMap = new Map();
        var name;
        name = Object.keys(this.state.catalog).map((key) => [(key), this.state.catalog[key]]);
        var i;

        //create map to check with catalog from backend to make sure not add the item that is not in the catalog
        for (i = 0; i < name.length; i++) {
            priceMap.set(name[i][0], parseFloat(name[i][1]));
            }
        
        //create map to check with existing list to make sure no dupicate item on the list
        // var inputMap = new Map();
        // if (this.state.items.length > 0) {
        //     for (i = 0; i < this.state.items.length; i++) {
        //         inputMap.set(this.state.items[i].text[0], this.state.items[i].text[1]);
        //     }
        // }
        this._inputItem.value = this._inputItem.value.toLowerCase();
        if (this._inputItem.value !== "" && this._inputQuantity.value !== "") {
            //check with catalog from backend to make sure not add the item that is not in the catalog
            // if (!priceMap.get(this._inputItem.value)) {
            //     alert(this._inputItem.value + " is not in the catalog");
            
            // //check with existing list to make sure no dupicate item on the list
            // } else if(inputMap.get(this._inputItem.value)) {
            //     alert(this._inputItem.value + " is already added to the list, you can change the quantitiy with + or - button")
            // }else {
                
                //POST the data to api
                // fetch(process.env.REACT_APP_BACKEND_API_URL + "/Items", {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         Name: this._inputItem.value,
                //         Quantity: this._inputQuantity.value
                //     })
                // })

                //create items
                var item = [
                    this._inputItem.value,
                    this._inputQuantity.value
                ]

                //create map with items and key
                var newItem = {
                    text: item,
                    key: Date.now()
                };


                //update the items list in the state
                this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    };
                });
            // }

            //clear the temp values
            this._inputItem.value = "";
            this._inputQuantity.value = "";
        }   
        e.preventDefault();
    }

    //delteItem based on the key (Date.now())
    deleteItem(key) {   

        //filter out the match item and return the filtered item
        // var deleteItem = this.state.items.filter(function(item) {
        //     return (item.key === key)
        // });
        
        //change the quantity to string for api request
        //var sentQuantity = Object.values(deleteItem)[0].text[1].toString();

        //sent DELETE request to the api to remove the item that is remove on the frontend
        // fetch(process.env.REACT_APP_BACKEND_API_URL + "/Items", {
        //     method: "DELETE",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         Name: Object.values(deleteItem)[0].text[0],
        //         Quantity: sentQuantity
        //     })
        // })
        
        //filter out the match item and return the new list without that item
        var filteredItem = this.state.items.filter(function(item) {
            return (item.key !== key)
        });

        //update the items list in the state to the new list
        this.setState({
            items: filteredItem
        });
    }

    // reset the state
    reset = () => {
        this.setState({
            step: 0,
            items:[]
        });
    }

    lockerIndex(index) {
        this.setState({
            lockerindex: index
        })
    }

    //add function for the catalog item button
    addItemButton(name) {

        var inputMap = new Map();
        var i;

        //create a map with existing items in the state
        if (this.state.items.length > 0) {
            for (i = 0; i < this.state.items.length; i++) {
                inputMap.set(this.state.items[i].text[0], this.state.items[i].text[1]);
            }
        }

        //make sure not adding duplicate item to the list
        if(inputMap.get(name)) {
            alert(name + " is already added to the list, you can change the quantitiy with + or - button")
        } else {

            //sent POST request to the api
            // fetch(process.env.REACT_APP_BACKEND_API_URL + "/Items", {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         Name: name,
            //         Quantity: "0"
            //     })
            // })

            //create item with name on the button and quantitiy 0
            var item = [
                name,
                "0"
            ]

            //create item that will be add to the itemlist in the state
            var newItem = {
                text: item,
                key: Date.now()
            };

            //update the itemlist in the state
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
    }

    addItemsToLocker() {
        var i;
        var locker = this.state.lockers;
        var lockerButton = this.state.lockerButtons;
        for (i = 0; i < locker.length; i++){
            if (locker[i][2].length === 0 && this.state.items.length > 0) {
                locker[i][2] = this.state.items;
                locker[i][1] = " (used)";
                lockerButton[i][1] = " (used)"
                this.setState((prevState) => {
                    return {
                        lockers: locker,
                        lockerButtons: lockerButton
                    }
                })
            i = locker.length;
            }
        }
    }

    


    render() {
        const {step} = this.state;
        console.log(this.state.lockers);
        switch(step) {
            case 1:
                return(
                    <div>
                        <ItemsDetail
                            lockerindex = {this.state.lockerindex}
                            lockers = {this.state.lockers}
                            prevStep = {this.prevStep}
                        />
                        </div>
                )
            case 2:
                    return (    
                        <div className='itemListMain'>
                            <AppBar style={{ backgroundColor: '#0e8a22' }}
                            //osition="static"
                            >
                            <Toolbar variant="dense">
                                <Container maxwidth= "sm">
                                    <Typography align="center" variant="h6" color="inherit">
                                        Enter Item for the FoodLocker
                                    </Typography>
                                </Container>
                            </Toolbar>                        
                            </AppBar>
                            <br/>
                            <div className='header'>
                            <h1>Enter in the menu item name, and then the quantity desired
                            <Catalog
                                catalog = {this.state.catalog}
                                addItemButton = {this.addItemButton}
                            />
                            </h1>
                                <form>
                                    <input  ref={(a) => this._inputItem = a}
                                            placeholder='Enter Item'>
                                    </input>
                                    <br/>
                                    <br/>
                                    <input  ref={(b) => this._inputQuantity = b}
                                            placeholder='Enter Quantity'>
                                    </input>
                                    <br/>
                                </form>
    
                                <Button
                                    variant="contained"
                                    color="primary" 
                                    onClick={this.addItem}> add
                                </Button>
            
                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={this.continue}>Continue
                                </Button>  

                                <Button 
                                    variant="contained"
                                    color="primary"
                                    onClick={this.reset}>Back
                                </Button>  

                                                     
                            </div>
                            <ShopItems
                                catalog = {this.state.catalog}
                                items = {this.state.items}
                                entries={this.state.items}
                                delete={this.deleteItem}/>
                        </div>
                    )
            case 3:
                return (
                    <div>
                    <Confirmation
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    />
                    <ShopItems
                        catalog = {this.state.catalog}
                        items = {this.state.items}
                        entries={this.state.items}
                        delete={this.deleteItem}
                    />
                    </div>
                )
            case 4:
                return (
                    <div>
                    <Checkout
                        items = {this.state.items}
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                    />
                    <ShopItems
                        catalog = {this.state.catalog}
                        items = {this.state.items}
                        entries = {this.state.items}
                        delete = {this.deleteItem}/>
                    </div>
                )
            case 5:
                return (
                    <div>
                        <PaymentMethod
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        addItemsToLocker = {this.addItemsToLocker}
                        />
                    </div>
                )
            case 6:
                return (
                    <div>
                        <ThankYou
                        nextStep = {this.reset}
                        />
                    </div>
                    )
            default:
                return (
                    <div>
                        <Locker
                            prevStep = {this.prevStep}
                            lockerEnteries = {this.state.lockers}
                            lockerButtons = {this.state.lockerButtons}
                            nextStep = {this.nextStep}
                            setDetail = {this.setDetail}
                            setAddItem = {this.setAddItem}
                            lockerIndex = {this.lockerIndex}
                            
                        />
                    </div>
                )
                
        }
    }
}

export default ShopList
