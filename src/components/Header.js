import { useState } from "react";
import logo from "../../assets/logo/logo.png";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="header">
            {/* Hamburger Button for Mobile */}
            <button onClick={toggleMenu} className="nav-mobile-button">
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Logo */}
            <div className="logo">
                <img className="logo-img" src={logo} alt="res-logo" />
            </div>

            {/* Navigation Links */}
            <div className={`${isOpen ? "close" : "open"} navbar`}>
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

            {/* Header Button */}
            <div className="header-btn">
                <button
                    className="btn"
                    onClick={() => {
                        setBtnName(btnName === "Login" ? "Logout" : "Login");
                    }}
                >
                    {btnName}
                </button>
            </div>
        </nav>
    );
};

export default Header;
