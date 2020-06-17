import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import {NavLink} from "react-router-dom";
import {useStyles} from './NavBar.styles';

const NavBar = () => {
  // Get the classes from the useStyles function
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar classes={{root: classes.toolbarRoot}}>
          <Button
            className={classes.logoLink}>
            <Typography variant='h3' component='h3'>
              Sunny &amp; Kim
            </Typography>
          </Button>
          <div>
            <Button
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              Wedding
            </Button>
            <Button
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              Location
            </Button>
            <Button
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              RSVP
            </Button>
          </div>
          {/*<NavLink*/}
          {/*  exact to="/"*/}
          {/*  className={classes.logoLink}>*/}
          {/*  <Typography variant='h1' component='h1'>*/}
          {/*    Sunny &amp; Kim*/}
          {/*  </Typography>*/}
          {/*</NavLink>*/}
          {/*<NavLink*/}
          {/*  exact to="/"*/}
          {/*  className={classes.navLink}*/}
          {/*  activeStyle={{opacity: 1}}*/}
          {/*>*/}
          {/*  Wedding*/}
          {/*</NavLink>*/}
          {/*<NavLink*/}
          {/*  exact to="/location"*/}
          {/*  className={classes.navLink}*/}
          {/*  activeStyle={{opacity: 1}}*/}
          {/*>*/}
          {/*  Location*/}
          {/*</NavLink>*/}
          {/*<NavLink*/}
          {/*  exact to="/rsvp"*/}
          {/*  className={classes.navLink}*/}
          {/*  activeStyle={{opacity: 1}}*/}
          {/*>*/}
          {/*  RSVP*/}
          {/*</NavLink>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
