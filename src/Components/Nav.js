import { Link } from "react-router-dom";
import React from "react"
import { DropdownButton, Dropdown } from "react-bootstrap";

function Nav() {
    return (
        <div >
            <nav className="navbar">
                <h1>Icon</h1>
                <ul className="nav-links">
                    <Link to="/Home"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Service"><li>Service</li></Link>
                    <Link to="/Gallary"><li>Gallary</li></Link>
                    <Link to="/ContactUs"><li>ContactUs</li></Link>
                </ul>
                <ul className="login">
                    <DropdownButton id="dropdown-basic-button" title="Login">
                        {/* <Dropdown.Item as = {Link} to ="/Admin">Admin</Dropdown.Item> */}
                        <Dropdown.Item as={Link} to="/Login">Login</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/CNA" >Create New Account</Dropdown.Item>
                    </DropdownButton>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
