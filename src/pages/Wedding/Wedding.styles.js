export const styles = theme => ({
  carouselContentContainer: {
    marginTop: '5rem',
    marginBottom: '5rem',
    minHeight: '48rem',
    [theme.breakpoints.down('sm')]: {
      minHeight: '38rem',
    },
  },
  contentContainer: {
    marginTop: '5rem',
    marginBottom: '5rem',
  },
  heading: {
    fontFamily: 'Sacramento, cursive',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  sectionParagraph: {
    marginTop: '1rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  linkContainer: {
    marginTop: '1rem',
  },
  link: {
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    color: '#414141',
    fontWeight: 600,
    fontStyle: 'italic',
    transition: 'all 0.35s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: '#d83600',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
});
