import React from "react";
import ReactDOM from "react-dom";

export default function () {
    let product = {name: "apple", stock: 10};

    const productExistMessage = ` The product named ${product.name} has ${product.stock} items.`  ;
    const elems = [
        <h1>The product named {product.name} is not in stock</h1>,
        <h1>{productExistMessage}</h1>
    ];

    let element;
    if(product.stock> 0){
        element = elems[1];
    } else {
        element = elems[0];
    }

    ReactDOM.render(element,document.getElementById("root"));

}