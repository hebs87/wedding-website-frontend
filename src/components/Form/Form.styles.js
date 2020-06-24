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
    fontSize: 20,
  },
  formField: {
    width: '100%',
    textAlign: 'left',
  },
  textAreaControl: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
  },
  textAreaIcon: {
    marginRight: 10,
    color: '#b3b3b3',
    fontSize: 20,
  },
  textAreaField: {
    width: '100%',
    fontSize: 16,
    textAlign: 'left',
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

});
