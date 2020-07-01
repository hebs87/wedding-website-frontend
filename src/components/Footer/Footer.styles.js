import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    padding: '1.5rem 0',
    backgroundColor: '#414141',
    color: '#b3b3b3',
  },
  footerText: {
    fontFamily: 'Sacramento, cursive',
    fontSize: '1.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  copyright: {
    fontSize: '1rem',
  },
}));
