import ReactDOM from "react-dom";

const simpleCounter = () => {
    let counter = 0;
    function getIncrementedCounter() {
        counter++;
    }
    function incrementCounter() {
        const counterDiv = <div>{getIncrementedCounter()}</div>;
        const rootElement = document.getElementById("root");
        ReactDOM.render(counterDiv,rootElement);
    }
    setInterval(incrementCounter,1000);
};

export default simpleCounter;