import React from 'react';
import ReactDOM from 'react-dom';

const heading2 = React.createElement(
    "h2",
    {
        id: "heading2",
    },
    "Welcome"
);
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
    "Hello, world!"
), heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

