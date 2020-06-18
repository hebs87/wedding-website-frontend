import React, {Fragment} from "react";
import NavBar from "./NavBar/NavBar";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import './NavBarContainer.styles.css';

const NavBarContainer = () => {
  return (
    <Fragment>
      <div className='main-nav'>
        <NavBar/>
      </div>
      <div className="mobile-nav">
        <MobileNavBar/>
      </div>
    </Fragment>
  )
}

export default NavBarContainer;
