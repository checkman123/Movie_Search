import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>The Movie DB</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/example">Example</Link>
            </div>
        </nav>
    )
}

export default NavBar;