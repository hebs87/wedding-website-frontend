import React, {Component, Fragment} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Banner from "../../components/Banner/Banner";
import ImageCarousel from "../../components/Carousel/ImageCarousel";
import OrangeTree from "../../static/assets/orange-tree.jpg";
import WeddingDay from "../../static/assets/wedding-day.jpg";
import UniversalStudios from "../../static/assets/universal-studios.jpg";

class WeddingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.fetchImageData();
  }

  fetchImageData = () => {
    fetch(`${process.env.REACT_APP_URL}/reply/home-carousel`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(images => this.setState({images: images}))
      .catch(err => console.log(err));
  }

  render() {
    const {images} = this.state;

    return (
      <Fragment>
        <Banner
          imageUrl={OrangeTree}
          heroTitle={'Join Us For Our Sunshine State Wedding'}
          firstTextLine={'1 June, 2021'}
          secondTextLine={'Orlando, Florida'}
          button={'RSVP'}
        />
        <Container maxWidth='md'>
          <Typography variant='h3' component='h3'>Our Story</Typography>
          <Typography variant='p' component='p'>
            Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in
            consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
            risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
          </Typography>
        </Container>
        <ImageCarousel images={images}/>
        <Banner
          imageUrl={WeddingDay}
          title={'Wedding Day'}
          firstTextLine={'1 June, 2021'}
        />
        <Container maxWidth='md'>
          <Typography variant='p' component='p'>
            Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in
            consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
            risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
          </Typography>
        </Container>
        <Banner
          imageUrl={UniversalStudios}
          title={'A Day At Universal'}
          firstTextLine={'3 June, 2021'}
        />
        <Container maxWidth='md'>
          <Typography variant='p' component='p'>
            Lorem ipsum odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in
            consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
            risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in
            fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus.
          </Typography>
          <Link href="https://www.attraction-tickets-direct.co.uk/" target="_blank" variant="body2">
            Attraction Tickets Direct
          </Link>
        </Container>
      </Fragment>
    )
  }
}

export default WeddingPage;
