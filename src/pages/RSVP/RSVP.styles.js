import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '5rem',
    marginBottom: '2rem',
  },
  heading: {
    fontFamily: 'Sacramento, cursive',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  sectionParagraph: {
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  formContainer: {
    marginBottom: '5rem',
  },
}));
