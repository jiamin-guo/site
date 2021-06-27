import React from 'react';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components'

import logo from "../assets/logo.svg";

const Nav = styled.nav`
  background: linear-gradient(135deg, #C7E3FE 0%, #FFFFFF 80%);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  width: 100%;
  pading: 0 24px;
`;

const NavLinks = styled(LinkS)`
  color: #184EAE;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 50px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
`;

const Logo = styled.img`
  height: 30px;
  margin: 0 20px 0 20px;
`;

export const NavItem = ({ text, to, opClass }) => {
  return (
    <NavLinks
      activeClass="active"
      to={to}
      spy
      smooth
      offset={-50}
      duration={400}
      className={opClass}
    >{text}
    </NavLinks>
  );
}

export const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer className="navbar">
        <NavItem to="home" text={
          <Logo src={logo} alt="logo"/>
        } />
        <NavItem to="about" text="About" id="about" />
        <NavItem to="work" text="Work" />
        <NavItem to="contact" text="Contact" />
      </NavbarContainer>
      {/* <Button id="logout" variant="contained" >Logout</Button> */}
    </Nav>
  );
};
