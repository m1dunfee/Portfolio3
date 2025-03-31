import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  Row,
  Col,  
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar id="Header" expand="md" className="fixed-top custom-nav">
      <Container>
        <NavbarBrand href="/">
          <h3 className="my-0">Portfolio</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Projects">Projects</NavLink>
            </NavItem>

            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Prospects
                </DropdownToggle>
                <DropdownMenu end >

                  <DropdownItem>
                    <NavLink href="/Ai">Artificial Intelligence</NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink href="/Cybersecurity">Cybersecurity</NavLink>
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>

            <NavItem>
              <NavLink href="#Footer">Contact</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
