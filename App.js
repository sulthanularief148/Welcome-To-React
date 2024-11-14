import React from 'react';
import ReactDOM from 'react-dom/client'


// React Element(Object) -> Render this code it becames html element
// React.createElemet => React Element(Object) => Html Element
const heading2 = React.createElement(
    "h2",
    {
        id: "heading2",
    },
    "Welcome"
);


// JSX - Javascript XML
// Jsx is a part of react - NO
// Babel is a Compiler or Transpiler - It converts JSX code into JS code
// JSX => React.createElement => React Element(Object) => Html Element
const heading = (<h1 className='head'>This is Welcome to React World!</h1>)

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [React.createElement(
        "h1",
        {
            id: "heading1",
        },
        "Hello Arief"
    ), heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

