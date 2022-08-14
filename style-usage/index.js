import ReactDOM from "react-dom";

export default function StyledDiv() {
    const styleObject = {
        minWidth: 100, //min-width
        minHeight: 100, //min-height
        backgroundColor: "blue", //
        textAlign: "center",
        lineHeight: "100px"
    };

    const element = <div style={styleObject}>This is styled div</div>;
    const rootElement = document.getElementById("root");
    ReactDOM.render(element,rootElement);
};