import {renerApp,renerApp1} from "./App";
import simpleCounterRender from "./counter";
import helloRenderer from "./hello-react";
import styleRenderer from "./style-usage";
import nested from "./nested-element";
import productRenderer from "./product-example";
import helloRend from "./hello-react";
import state from "./state-example";
import lifeCycleCount from "./lifeCycleCounter";
import eventHandler from "./event-handlers";
import CarFilt from "./input-examples";
import Fetch from "./fetch-example";


//Fetch();
//CarFilt();
//eventHandler();
//state()
//styleRenderer();
//simpleCounterRender();
//nested();
//helloRenderer();
//renerApp1();
//renerApp();
//productRenderer();
//helloRend();
//lifeCycleCount();

function displayer(some){
    console.log(some);
}


let promise = new Promise(function (resolve, reject) {
    let x = 0;

    if (x == 0) {
        resolve({ success: true, message: "Completed" });
    } else {
        reject({ success: false, message: "Error" });
    }
});

promise
    .then(function (value) {
        console.log("Promise succedd.");
        console.log(value);
    })
    .catch(function (error) {
        console.log("Promise failed.");
        console.log(error);
    });
