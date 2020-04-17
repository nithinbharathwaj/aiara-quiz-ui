import React, {FC, useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from "react-router-dom";

export const AiaraNavbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Aiara Quiz</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to={'/'}><NavLink>To Do</NavLink></Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/weather"><NavLink>Weather</NavLink></Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
}
