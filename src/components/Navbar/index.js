import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo1.png')} 
           width="180"
           height="80"
           className="d-inline-block align-top"
           alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home1' activeStyle>
            Home
          </NavLink>
          <NavLink to='/post' activeStyle>
            Post
          </NavLink>
          <NavLink to='/user' activeStyle>
            User
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
