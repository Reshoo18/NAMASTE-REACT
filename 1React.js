import React from "react";
import ReactDom from "react-dom";
const parent =React.createElement(
    "div",
    {id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"this is namste react"),
        React.createElement("h2",{},"hi i ma h2 tag"),
        ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i m a H1 tag"),
        React.createElement("h2",{},"hi i ma h2 tag"),
        ]),
    
    ]);


     console.log(parent);//object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 