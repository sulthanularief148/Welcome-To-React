
const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className='footer'>
            <p> © Copyright {year}</p>
        </div>
    )
}

export default Footer;