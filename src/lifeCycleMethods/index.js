import ReactDOM from "react-dom";
import { StrictMode } from "react";
import CarList from "./CarList";

export default function () {
    const rootElement = document.getElementById("root");
    ReactDOM.render(
        <StrictMode>
            <CarList />
        </StrictMode>,
        rootElement
    );
}
