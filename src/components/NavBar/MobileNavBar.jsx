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
  .logo {
    padding: 15px 0;
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
