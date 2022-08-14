import "./design.css";


export default function CarsAndTrucksExample() {
    return (
        <div>
            <h2>Welcome to React Transportation</h2>
            <h2>The best place to buy vehicles online</h2>
            <h2>Choose Options</h2>
            <div className="topping">
                <input type="checkbox" id="vehicle" name="vehicle" value="vehicle" />New Only
            </div>
            <h3>Select Type</h3>
            <h4>Cars</h4>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2013 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32000&nbsp;&nbsp;</h6><button type="button">Buy Now!</button><br/>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2015 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30000&nbsp;&nbsp;</h6><button type="button">Buy Now!</button><br/>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2009 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28500&nbsp;&nbsp;</h6><button type="button">Buy Now!<br/></button>
            <h4>Trucks</h4>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2009 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21000&nbsp;&nbsp;</h6><button type="button">Buy Now!</button><br/>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2019 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32000&nbsp;&nbsp;</h6><button type="button">Buy Now!</button><br/>
            <h5>Year</h5> <h5>Model</h5> <h5>Price</h5> <h5>&nbsp;&nbsp;&nbsp;Buy</h5> <br/>
            <h6> 2022 &nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;</h6><h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40000&nbsp;&nbsp;</h6><button type="button">Buy Now!<br/></button>
        </div>
    );
}