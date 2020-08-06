import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import OrangeTree from "../../static/assets/orange-tree.jpg";
import {useStyles} from './Error.styles';

const Banner = () => {
  // Get the classes from the useStyles function
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <div
      style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
        ), url(${OrangeTree}) no-repeat center / cover`,
      }}
      className={classes.errorBgImg}
    >
      <Container className={classes.errorContainer} maxWidth="lg">
        <Typography className={classes.heading} variant='h3' component='h3'>
          Oops!
        </Typography>
        <Typography className={classes.subtext} variant='h3' component='h3'>
          It looks like something went wrong.
        </Typography>
        <Typography className={classes.errorType} variant='h5' component='h5'>
          404
        </Typography>
        <Typography className={classes.errorDescription} variant='h5' component='h5'>
          Page not found
        </Typography>
        <Button className={classes.errorButton} onClick={handleClick}>
          <FontAwesomeIcon className={classes.faIcon} icon={faHome}/>
          Back to home
        </Button>
      </Container>
    </div>
  )
}

export default Banner;
