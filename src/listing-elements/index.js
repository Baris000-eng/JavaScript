import ReactDOM from "react-dom";
import {StrictMode} from "react";
import ProductList from "./ProductList";


export default function () {
    var products = [
        {product: "Apple",  price:3},
        {product: "Banana", price: 1},
        {product: "Carrot", price: 2},
        {product: "Donuts", price: 5},
        {product: "Eggplant", price: 4}
    ];
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <StrictMode>
            <ProductList products={products} />
        </StrictMode>
    )
}