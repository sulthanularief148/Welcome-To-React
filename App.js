const heading1 = React.createElement(
    "h1",
    {
        id: "heading1",
    },
    "Hello, world!"
);
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
    [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);