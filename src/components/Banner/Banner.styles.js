import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bannerBgImg: {
    minHeight: '45vh',
    display: 'flex',
  },
  bannerContainer: {
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
  heroTitle: {
    fontFamily: 'Sacramento, cursive',
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.down(769)]: {
      marginTop: 70,
    },
  },
  bannerTitle: {
    fontFamily: 'Sacramento, cursive',
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  bannerText: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: 'Amatic SC, cursive',
    letterSpacing: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  bannerBtn: {
    backgroundColor: '#b3b3b3',
    color: '#414141',
    width: '10rem',
    margin: '15px auto',
    borderRadius: '1.3rem',
    transition: 'all 0.35s ease-in-out',
    '&:hover': {
      backgroundColor: '#d83600',
      color: '#b3b3b3',
    },
  },
  faIcon: {
    fontSize: '1.3rem',
    marginLeft: '7px',
  },
}));
