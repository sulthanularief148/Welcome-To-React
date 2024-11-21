import logo from "../../assets/logo/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className='logo-img' src={logo} alt='res-logo' />
                {/* <img src={IMAGE_URL} alt="Logo" width={200} height={200} /> */}
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

export default Header;

// Default Export
// Named Export