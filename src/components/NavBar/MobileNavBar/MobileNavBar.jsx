import React from 'react';
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
  .logo {
    padding: 15px 0;
  }
  z-index: 999;
  h3 {
    cursor: pointer;
  }
`

const MobileNavBar = () => {
  return (
    <Nav>
      <div className="logo">
        <h3>Sunny &amp; Kim</h3>
      </div>
      <Burger/>
    </Nav>
  )
}

export default MobileNavBar;
