import React, {Component, Fragment} from "react";
import {styles} from "../Wedding/Wedding.styles";
import {withStyles} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Fade from 'react-reveal/Fade';
import Banner from "../../components/Banner/Banner";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import FloridaSign from "../../static/assets/florida-sign.jpg";
import Orlando from "../../static/assets/orlando.jpg";
import Spinner from "../../components/Spinner/Spinner";

class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchImageData();
  }

  fetchImageData = () => {
    fetch(`${process.env.REACT_APP_URL}/reply/villa-carousel`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(images => this.setState({images, loading: false}))
      .catch(err => this.props.setErrorTrue());
  }

  render() {
    const {classes} = this.props;
    const {images, loading} = this.state;

    return (
      <Fragment>
        <Banner
          imageUrl={FloridaSign}
          heroTitle={'Reunion Resort'}
          firstTextLine={'Orlando, Florida'}
        />
        <Fade bottom>
          <Container maxWidth='md' className={classes.contentContainer}>
            <Typography variant='h3' component='h3' className={classes.heading}>The Venue</Typography>
            <Typography variant='p' component='p' className={classes.sectionParagraph}>
              Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque
              in
              consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
              ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id
              semper
              risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
              fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium
              lectus.
            </Typography>
            <Typography variant='p' component='p' className={classes.sectionParagraph}>
              1193 Grand Traverse Pkwy
              <br/>
              Kissimmee
              <br/>
              FL. 34747
            </Typography>
            {
              loading &&
              <Spinner/>
            }
            {
              !loading &&
              <ImageCarousel images={images}/>
            }
          </Container>
        </Fade>
        <Fade bottom>
          <Banner
            imageUrl={Orlando}
            title={'Where To Stay'}
            firstTextLine={'Places in Orlando'}
          />
          <Container maxWidth='md' className={classes.contentContainer}>
            <Typography variant='p' component='p'>
              Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque
              in
              consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
              ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id
              semper
              risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
              fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
              aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium
              lectus.
            </Typography>
            <div className={classes.linkContainer}>
              <Link className={classes.link} href="https://www.homeaway.co.uk/" target="_blank" variant="body2">
                Home Away
              </Link>
            </div>
          </Container>
        </Fade>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Location);
