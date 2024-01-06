import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg sticky-top bg-white shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-camera2 display-6" />
                    <span className="display-6">SnapMyMoments</span>
                </Link>
                <ul className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/service">Service</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <Link className="nav-item nav-link" to="/help">Help</Link>
                    <Link className="nav-item nav-link" to="/about">About</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
