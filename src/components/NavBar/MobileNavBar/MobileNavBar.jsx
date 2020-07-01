import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  color: #b3b3b3;
  a {
    text-decoration: none;
  }
  .logo {
    padding: 15px 0;
  }
  z-index: 999;
  h3 {
    cursor: pointer;
    font-family: Sacramento, cursive;
    color: #b3b3b3;
    font-size: 2.3rem;
    font-weight: normal;
    margin-bottom: 0;
    margin-top: 10px;
  }
`

const MobileNavBar = () => {
  return (
    <Nav>
      <div className="logo">
        <NavLink
          exact to="/"
        >
          <h3>Kimmy &amp; Sunny</h3>
        </NavLink>
      </div>
      <Burger/>
    </Nav>
  )
}

export default MobileNavBar;
