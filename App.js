import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header"
import Footer from "./src/components/Footer"
import Body from "./src/components/Body"

const App = () => {
    console.log(<Body />)
    return (
        <div className='app'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

