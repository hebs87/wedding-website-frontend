import React from "react";
import {useScrollHandler} from "../../../hooks/ScrollHook";
import {NavLink} from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {useStyles} from './NavBar.styles';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRing} from "@fortawesome/free-solid-svg-icons/faRing";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons/faCommentDots";


const NavBar = () => {
  // Get the classes from the useStyles function
  const classes = useStyles();
  const scroll = useScrollHandler(15);

  return (
    <div className={scroll ? classes.root : classes.rootScrolled}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar classes={{root: classes.toolbarRoot}}>
          <NavLink
            exact to="/"
            className={classes.logoLink}>
            <Typography className={classes.logoText} variant='h3' component='h3'>
              Kimmy &amp; Sunny
            </Typography>
          </NavLink>
          <div className={classes.navLinkWrapper}>
            <NavLink
              exact to="/"
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              <FontAwesomeIcon className={classes.faIcon} icon={faRing}/>
              Wedding
            </NavLink>
            <NavLink
              exact to="/location"
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              <FontAwesomeIcon className={classes.faIcon} icon={faMapMarkedAlt}/>
              Location
            </NavLink>
            <NavLink
              exact to="/rsvp"
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              <FontAwesomeIcon className={classes.faIcon} icon={faCommentDots}/>
              RSVP
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
