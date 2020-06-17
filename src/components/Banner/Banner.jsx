import React from "react";
import {useStyles} from './Banner.styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Banner = ({imageUrl, title, firstTextLine, secondTextLine, button}) => {
  // Get the classes from the useStyles function
  const classes = useStyles();

  return (
    <div
      style={{
        background: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
        ), url(${imageUrl}) no-repeat center / cover`,
      }}
      className={classes.bannerBgImg}
    >
      <Container className={classes.bannerContainer} maxWidth="lg">
        {
          title &&
          <Typography className={classes.bannerTitle} variant='h3' component='h3'>
            {title}
          </Typography>
        }
        {
          firstTextLine &&
          <Typography className={classes.bannerText} variant='h5' component='h5'>
            {firstTextLine}
          </Typography>
        }
        {
          secondTextLine &&
          <Typography className={classes.bannerText} variant='h5' component='h5'>
            {secondTextLine}
          </Typography>
        }
        {
          button &&
          <Button className={classes.bannerBtn}>
            {button}
          </Button>
        }
      </Container>
    </div>
  )
}

export default Banner;
