import React from 'react';
import ReactDOM from 'react-dom/client'
import logo from "./assets/logo/reslogo.png"


const year = new Date().getFullYear();
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className='logo-img' src={logo} alt='res-logo' />
            </div>
            <div className='navbar'>
                <ul className='nav'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className='res-card'>
            <figure >
                <img className='res-img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a98d757e-7c02-48fb-90ee-1d4111a8972a_809163.JPG' alt='res-image' />
            </figure>
            <h2 className='res-name'>Domino's Pizza</h2>
            <h2 className='res-rating'>⭐ 4.2</h2>
            <h2 className='res-cuisine'>Italian pasta, Desserts</h2>
            <h2 className='res-timing'> 20 - 25mins</h2>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar'>Search</div>
            <div className='res-container'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='footer'>
            <p> © Copyright {year}</p>
        </div>
    )
}

const App = () => {
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

