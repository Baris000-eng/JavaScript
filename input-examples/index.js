import ReactDOM from "react-dom";
import {StrictMode} from "react";
import CarFilt from "./CarFilter";


export default function () {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <StrictMode>
            <CarFilt/>
        </StrictMode>
    )
}