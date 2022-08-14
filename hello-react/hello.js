const Hello = function(props) {
    let {title,name} = props;
    return (
        <>
            {title}
            <h1>Hello React - Functional Component</h1>
        </>
    );
};


export default Hello;