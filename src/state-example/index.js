import ReactDOM from "react-dom";
import {StrictMode} from "react";
import FooBar from "./FooBar";


export default function () {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <StrictMode>
            <FooBar />
        </StrictMode>,
        rootElement
    )
}