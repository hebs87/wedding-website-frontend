import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import {NavLink} from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbarRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  logoLink: {
    marginRight: '0',
    color: '#b3b3b3',
    [theme.breakpoints.up('sm')]: {
      marginRight: '10px',
    },
    '&:hover': {
      background: 'transparent',
    },
  },
  navLink: {
    margin: '0 2px',
    color: '#b3b3b3',
    padding: '10px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    transition: 'all 0.35s ease-in-out',
    "&:hover": {
      backgroundColor: 'transparent',
      color: '#d83600',
    },
  },
}));

const NavBar = () => {
  // Get the classes from the useStyles function
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar classes={{root: classes.toolbarRoot}}>
          <Button
            exact to="/"
            className={classes.logoLink}>
            <Typography variant='h3' component='h3'>
              Sunny &amp; Kim
            </Typography>
          </Button>
          <div>
            <Button
              exact to="/"
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              Wedding
            </Button>
            <Button
              exact to="/location"
              className={classes.navLink}
              activeStyle={{opacity: 1}}
            >
              Location
            </Button>
            <Button
              exact to="/rsvp"
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
