import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    componentDidMount() {
        this.setState((prepState,props) => {
            return {value: prepState.value + 1};
        });
        this.setState((prepState,props) => {
            return {value: prepState.value + 1};
        });
        this.setState((prepState,props) => {
            return {value: prepState.value + 1};
        });
        this.setState((prepState,props) => {
            return {value: prepState.value + 1};
        });

    }



    render() {
        return <div>Counter: {this.state.value}</div>
    }
}

export default Counter;