import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/help">Help</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar
