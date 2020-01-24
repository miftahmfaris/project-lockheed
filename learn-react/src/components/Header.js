import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/">
                                <NavLink>Home</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile">
                                <NavLink>Profile</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/class">
                                <NavLink>Class Component</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/function">
                                <NavLink>Function Component</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
