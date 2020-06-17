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
  },
  bannerTitle: {

  },
  bannerText: {

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
}));
