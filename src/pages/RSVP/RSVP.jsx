import React, {Fragment, useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fade from "react-reveal/Fade";
import FlashMessage from "../../components/FlashMessage/FlashMessage";
import Banner from "../../components/Banner/Banner";
import WeddingRSVP from "../../static/assets/wedding-rsvp.jpg";
import Form from "../../components/Form/Form";
import {useStyles} from "./RSVP.styles";

const RSVP = () => {
  const classes = useStyles();
  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [attending, setAttending] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <Fragment>
      {
        showFlashMessage &&
        <FlashMessage
          attending={attending}
          submissionError={submissionError}
          setShowFlashMessage={setShowFlashMessage}
        />
      }
      <Banner
        imageUrl={WeddingRSVP}
        heroTitle={'RSVP'}
        firstTextLine={'Please respond by 31 December, 2020'}
      />
      <Fade bottom>
        <Container maxWidth='md' className={classes.contentContainer}>
          <Typography variant='h3' component='h3' className={classes.heading}>See You There?</Typography>
          <Typography variant='p' component='p' className={classes.sectionParagraph}>
            Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in
            consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
            risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
          </Typography>
        </Container>
        <Container maxWidth='md' className={classes.formContainer}>
          <Form
            setShowFlashMessage={setShowFlashMessage}
            setAttending={setAttending}
            setSubmissionError={setSubmissionError}
          />
        </Container>
      </Fade>
    </Fragment>
  )
}

export default RSVP;
