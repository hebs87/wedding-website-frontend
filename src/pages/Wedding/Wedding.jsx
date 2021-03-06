import React, {Component, Fragment} from "react";
import {styles} from "./Wedding.styles";
import {withStyles} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Banner from "../../components/Banner/Banner";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import Spinner from "../../components/Spinner/Spinner";
import OrangeTree from "../../static/assets/orange-tree.jpg";
import WeddingDay from "../../static/assets/wedding-day.jpg";
import UniversalStudios from "../../static/assets/universal-studios.jpg";

class WeddingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchImageData();
    window.scrollTo(0, 0);
  }

  fetchImageData = () => {
    fetch(`${process.env.REACT_APP_URL}/reply/home-carousel`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(images => this.setState({images, loading: false}))
      .catch(err => this.props.setErrorTrue());
  }

  routeToRSVP = () => {
    window.location.href = '/rsvp'
  }

  render() {
    const {classes} = this.props;
    const {images, loading} = this.state;

    return (
      <Fragment>
        <Banner
          imageUrl={OrangeTree}
          heroTitle={'Join Us For Our Sunshine State Wedding'}
          firstTextLine={'1 June, 2021'}
          secondTextLine={'Orlando, Florida'}
          button={'RSVP'}
          handleClick={this.routeToRSVP}
        />
        <Fade bottom>
          <Container maxWidth='md' className={classes.contentContainer}>
            <Typography variant='h3' component='h3' className={classes.heading}>Our Story</Typography>
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
            {
              loading &&
              <Spinner/>
            }
            {
              !loading &&
              <ImageCarousel images={images} home/>
            }
          </Container>
        </Fade>
        <Fade bottom>
          <Banner
            imageUrl={WeddingDay}
            title={'Wedding Day'}
            firstTextLine={'1 June, 2021'}
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
          </Container>
        </Fade>
        <Fade bottom>
          <Banner
            imageUrl={UniversalStudios}
            title={'A Day At Universal'}
            firstTextLine={'3 June, 2021'}
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
              <Link className={classes.link} href="https://www.attraction-tickets-direct.co.uk/" target="_blank"
                    variant="body2">
                Attraction Tickets Direct
              </Link>
            </div>
          </Container>
        </Fade>
      </Fragment>
    )
  }
}

export default withStyles(styles)(WeddingPage);
