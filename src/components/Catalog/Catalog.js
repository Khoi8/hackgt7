import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class Catalog extends Component {
    constructor(props) {
        super(props);
        this.createButton = this.createButton.bind(this);
    }

    //Create a button for the current catalog item in the array
    createButton(name) {        
        return <Button onClick ={() => this.addItemButton(name)}  key={Math.random(1)}>
                    {name}
                </Button>
    }
    

    //Using the addItemButton method from the parent(shoplist)
    addItemButton(name, key) {
        this.props.addItemButton(name);
    }
    
    render() {
        //Using the catalog from the parent(shoplist)
        var catalog = this.props.catalog;
        var listItems = {};
        //Create the list of button to render using the createButton method
        listItems = Object.keys(catalog).map((name) => (this.createButton(name)));
        return (
            <div>
                <ul className='theList'>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default Catalog
