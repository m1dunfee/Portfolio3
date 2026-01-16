import { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Collapse,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar light fixed="top" expand="md" className="custom-nav">
      <Container >
        <NavbarBrand tag={RRNavLink} to="/" onClick={() => setIsOpen(false)}>
          <h3 className="my-0">Portfolio</h3>
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>

            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/"
                end
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/projects"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret color="link">
                Computer Science
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={RRNavLink} to="/prospects" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  Prospects
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to="/topics" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  Topics
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              {/*  */}
              <NavLink
                href="#Footer"
                onClick={() => {
                  document.querySelector('#Footer')?.scrollIntoView({ behavior: 'smooth' });
                  props.onFooterClick?.();
                  setIsOpen(false)
                }}
                className="nav-link"
              >
                Contact / Resume
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};


export default Header;
