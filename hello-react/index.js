import ReactDOM from "react-dom";
import {React, StrictMode} from "react";
import Hellow from "./hello";

/*export default function() {
    const element = <h1>Hello From React</h1>;
    //const element = React.createElement(
    // "h1",
    //null,
    // "Hello from React h2"
    //)
    ReactDOM.render(element,document.getElementById("root"));
}*/


export default function() {
    let propObject = {
        title: "My Title",
        name: "My Name"
    };
    ReactDOM.render(
        <StrictMode>
            <Hellow title = {propObject.title} name = {propObject.name}/>
        </StrictMode>,
        document.getElementById("root")
    );
}
////const rootElement = document.getElementById("root");
////ReactDOM.render(<Hellow/>,rootElement);
//ReactDOM.render(<Hellow/>,document.getElementById("root"));
////};