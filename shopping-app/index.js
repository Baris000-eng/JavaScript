import ReactDOM from "react-dom";
import { StrictMode } from "react";
import ShoppingApp from "./shoppingApp";

export default function () {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <StrictMode>
            <ShoppingApp/>
        </StrictMode>,
        rootElement
    );
}