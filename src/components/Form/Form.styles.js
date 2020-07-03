export const styles = theme => ({
  formControl: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
  },
  formIcon: {
    transform: 'translateY(-7px)',
    marginRight: 10,
    color: '#b3b3b3',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-6px)',
      fontSize: '1.2rem',
    },
  },
  formField: {
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    color: '#414141',
  },
  inputRoot: {
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    color: '#414141',
    '&:hover': {
      '&:before': {
        borderBottom: '2px solid rgba(0, 0, 0, 0.42) !important',
      },
    },
    '&:focus': {
      outline: 'none',
    },
    '&:after': {
      borderBottom: '2px solid rgba(0, 0, 0, 0.42) !important',
    },
  },
  input: {
    padding: '4px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '1px 0',
    },
  },
  labelRoot: {
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    color: '#414141',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  labelFilled: {
    fontSize: '1.2rem',
    color: '#414141',
    '&:focus': {
      color: '#414141',
    },
  },
  labelFocused: {
    fontSize: '1.2rem',
    color: '#414141',
    '&:focus': {
      color: '#414141',
    },
  },
  selectRoot: {
    paddingBottom: 4,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 1,
    },
  },
  menuRoot: {
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.8rem',
    color: '#414141',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
  },
  textAreaControl: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    marginTop: 20,
  },
  textAreaIcon: {
    marginRight: 10,
    color: '#b3b3b3',
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  textAreaField: {
    width: '100%',
    fontSize: '1.8rem',
    textAlign: 'left',
    fontFamily: 'Amatic SC, cursive',
    color: '#414141',
    borderTop: 'unset',
    borderLeft: 'unset',
    borderRight: 'unset',
    borderBottom: '1px solid rgba(0, 0, 0, 0.42) !important',
    resize: 'none',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
    },
    '&:hover': {
        borderBottom: '2px solid rgba(0, 0, 0, 0.42) !important',
    },
    '&:focus': {
      outline: 'none',
      borderBottom: '2px solid rgba(0, 0, 0, 0.42) !important',
    },
  },
  btnControl: {
    display: 'flex',
    justifyContent: 'center',
  },
  formBtn: {
    backgroundColor: '#b3b3b3',
    color: '#414141',
    width: '10rem',
    margin: '0 15px',
    borderRadius: '1.5rem',
    transition: 'all 0.35s ease-in-out',
    fontFamily: 'Amatic SC, cursive',
    fontSize: '1.6rem',
    fontWeight: 600,
    padding: 0,
    height: '2.4rem',
    '&:hover': {
      backgroundColor: '#d83600',
      color: '#b3b3b3',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      height: '2.1rem',
      width: '8rem',
    },
  },
  faIcon: {
    fontSize: '1.3rem',
    marginLeft: '7px',
  },
  errorMessage: {
    position: 'absolute',
    transform: 'translate(34px, 17px)',
    color: '#d83600',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(29px, 17px)',
    },
  },
  optionError: {
    transform: 'translate(40px, 17px)',
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(34px, 17px)',
    },
  },
});
