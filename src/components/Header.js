import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    // add the card.primary effect to the nav
    <Navbar id="Header" expand="md" className="fixed-top custom-nav"> 
      <Container>
        <NavbarBrand href="/">
          <h3 className="my-0">Portfolio</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#AboutMe">Bio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Services">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Footer">Contact</NavLink>
            </NavItem>
            {/* Uncomment for dropdown options
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
