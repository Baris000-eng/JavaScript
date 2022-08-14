import ShoppingList from "./ShoppingList.js";
import ShoppingTitle from "./ShoppingTitle.js";



function ShoppingApp() {
    const shoppingList = {
        pageTitle: "My Shopping List",
        items: [
            {header: "Food", items: ["Apple","Bread","Cheese"]},
            {header: "Clothes", items: ["Shirt","Pants","Hat"]},
            {header: "Supplies", items: ["Pen","Paper","Glue"]}
        ]
    };
    let numOfItems = 0;
    shoppingList.items.forEach(element=>{numOfItems+=element.items?element.items.length:0});
    return (<div><ShoppingTitle header = {shoppingList.pageTitle} numOfItems={numOfItems}/>
            {shoppingList.items && shoppingList.items.map((item)=><ShoppingList header = {item.header}items = {item.items}/>)}
        </div>

    );
}


export default ShoppingApp;