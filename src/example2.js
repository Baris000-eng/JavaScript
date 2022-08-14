import ReactDOM from "react-dom";

export const renerApp = () => {
    const hello = <h1>Hello</h1>;
    const rootElement = document.getElementById("root");
    ReactDOM.render(hello,rootElement);
};

export const renerApp1 = () => {
    const hello = <h1>Hello1</h1>;
    const rootElement = document.getElementById("root"); //this method is used for obtaining the elements based on their ids.
    ReactDOM.render(hello,rootElement);
};
