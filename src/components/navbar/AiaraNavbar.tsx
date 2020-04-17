import React, {FC, useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';

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
                        <NavLink href="/">To Do</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/weather">Weather</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
}
