import React, {Fragment} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  // Get current year
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div>
      <Container maxWidth='md'>
        <Typography variant='h6' component='h6'>
          <span>&copy;{year} </span>
          <span>Sunny &amp; Kim</span>
        </Typography>
      </Container>
    </div>
  )
}

export default Footer;
