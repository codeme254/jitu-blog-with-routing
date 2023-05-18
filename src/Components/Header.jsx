import { Link } from "react-router-dom"
const Header = () => {
    return(
        <header className="header">
            <h2 className="header__title">The Tech Blog</h2>
            <nav className="header__nav">
                <Link to="/" className="header__link">Home</Link>
                <Link to="/about" className="header__link">About</Link>
                <Link to="/more-blogs" className="header__link">More blogs</Link>
            </nav>
        </header>
    )
}

export default Header;