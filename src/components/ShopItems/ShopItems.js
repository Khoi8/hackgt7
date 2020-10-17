import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export class ShopItems extends Component {

    constructor(props) {
        super(props);
        this.createItems = this.createItems.bind(this);
    }

    //create item with input passed in, delete by click on the delete button
    createItems(item) {        
        return <li key={item.key} >
                    Item: {item.text[0]} 
                    <br/>
                    Quantity: {item.text[1]}
                    <br/>
                    <Button
                            variant="contained"
                            onClick={() => this.increase(item)} 
                            > +
                    </Button>
                    <Button
                            variant="contained"
                            onClick={() => this.decrease(item)} 
                            > - 
                    </Button>
                    <Button
                            variant="contained"
                            onClick={() => this.delete(item.key)} 
                            > delete 
                    </Button>
                </li>
    }

    //increase the quantity of item and re-render
    increase(item) {
        item.text[1] = parseInt(item.text[1]) + 1;
        this.forceUpdate();
        var sentQuantity = item.text[1].toString();
        fetch(process.env.REACT_APP_BACKEND_API_URL + "/Items", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: item.text[0],
                Quantity: sentQuantity
            })
        })
    }

    //decrease the quantity of item, limit at zero and re-render
    decrease(item) {
        if (parseInt(item.text[1]) > 0){
            item.text[1] = parseInt(item.text[1]) - 1;
            this.forceUpdate();
            var sentQuantity = item.text[1].toString();
            fetch(process.env.REACT_APP_BACKEND_API_URL + "/Items", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: item.text[0],
                    Quantity: sentQuantity
                })
            })
        }
    }    

    //delete item using its key
    delete(key) {
        this.props.delete(key);
    }

    //calculate the total price of the item
    itemPrice(item) {

        const priceMap = new Map();

        //taking the catalog from the parent (shoplist)
        var catalog = this.props.catalog;

        //turn the catalog object from api into array
        catalog = Object.keys(catalog).map((key) => [(key), catalog[key]]);
        var i;

        //create the price map from the catalog from the api
        for (i = 0; i < catalog.length; i++) {
            priceMap.set(catalog[i][0], parseFloat(catalog[i][1]));
        }

        //getting the single price 
        var itemPrice = parseFloat(priceMap.get(item.text[0]));
        //calculate the total price for that one type of item  
        var itemTotal = itemPrice * parseFloat(item.text[1]);
        return itemTotal;
    }

    //render the list of items
    render() {

        //taking enteries from the parent(shoplist)
        var itemEntries = this.props.entries;
        var listItems = {}

        //create the list item to render 
        listItems = itemEntries.map(this.createItems);

        //taking items from the parent(shoplist)
        var items = this.props.items;
        var total = 0;

        //add price of all the items in the list together
        if (items.length > 0) {
            items.forEach(element => total += this.itemPrice(element));
        }
        return ( 
            <div className = 'header'>

                {/*fix the price to 2 decimal place*/}
                Total Price: ${total.toFixed(2)}
                
                <ul className='theList'>
                    {listItems}
                </ul>
            </div>
        )

    }
}

export default ShopItems
