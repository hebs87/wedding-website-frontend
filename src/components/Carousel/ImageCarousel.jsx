import React, {Fragment} from 'react';
import Carousel from 'react-material-ui-carousel';
import './ImageCarousel.styles.css';

const ImageCarousel = ({images, home}) => {
    return (
      <Fragment>
        <Carousel
          className={home ? 'home-carousel' : 'villa-carousel'}
          autoPlay={true}
          interval={3000}
          animation='fade'
          indicators={false}
          timeout={500}
          navButtonsAlwaysVisible={false}
        >
          {
            images.map(image => {
              return <img className='image' key={image.id} src={image.image} alt={image.image}/>
            })
          }
        </Carousel>
      </Fragment>
    )
}

export default ImageCarousel;
