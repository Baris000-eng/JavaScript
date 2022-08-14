import React from "react";

class HelloClass extends React.Component {
    render() {
        let {title,name} = this.props;
        return (
            <>
                {title}
                <h1>Hello React  - Functional Component {name}</h1>
                <br/>
            </>
        );
    }
}

export default HelloClass;