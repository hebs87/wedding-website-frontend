import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./Footer.styles";

const Footer = () => {
  const classes = useStyles();
  // Get current year
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className={classes.footerWrapper}>
      <Container maxWidth='md'>
        <Typography variant='h6' component='h6' className={classes.footerText}>
          <span className={classes.copyright}>&copy;</span>
          <span>{year} Kimmy &amp; Sunny</span>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;
