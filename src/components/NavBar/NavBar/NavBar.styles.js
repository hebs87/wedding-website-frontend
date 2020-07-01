import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    position: 'fixed',
    top: 0,
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
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      marginRight: '10px',
    },
    '&:hover': {
      background: 'transparent',
    },
  },
  logoText: {
    fontFamily: 'Sacramento, cursive',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  navLinkWrapper: {
    transform: 'translateY(-4px)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-6px)',
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
    fontSize: '1.6rem',
    letterSpacing: 1,
    "&:hover": {
      backgroundColor: 'transparent',
      color: '#d83600',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  faIcon: {
    fontSize: '1.6rem',
    marginRight: '10px',
  },
}));
