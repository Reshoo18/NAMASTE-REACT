const heading= React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},
     "Hello react I am reshoo");

     console.log(heading);//object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);