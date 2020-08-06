import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  errorBgImg: {
    minHeight: '100vh',
    display: 'flex',
  },
  errorContainer: {
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#b3b3b3',
    [theme.breakpoints.down(769)]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  heading: {
    fontFamily: 'Sacramento, cursive',
    marginBottom: 40,
    fontSize: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
  },
  subtext: {
    fontFamily: 'Amatic SC, cursive',
    marginBottom: 20,
    letterSpacing: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  errorType: {
    fontFamily: 'Sacramento, cursive',
    fontSize: '6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '4rem',
    },
  },
  errorDescription: {
    fontFamily: 'Amatic SC, cursive',
    marginBottom: 20,
    letterSpacing: 1,
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  errorButton: {
    backgroundColor: '#b3b3b3',
    color: '#414141',
    width: '13rem',
    margin: '15px auto',
    borderRadius: '1.5rem',
    transition: 'all 0.35s ease-in-out',
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    fontWeight: 600,
    padding: 0,
    height: '3.1rem',
    '&:hover': {
      backgroundColor: '#d83600',
      color: '#b3b3b3',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      height: '2.1rem',
      width: '9rem',
    },
  },
  faIcon: {
    fontSize: '1.3rem',
    marginRight: '7px',
  },
}));
