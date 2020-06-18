import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ImagePaper from "./ImagePaper";

const ImageCarousel = ({images}) => {
    return (
      <div style={{marginTop: "50px"}}>
        <Carousel
          className="carousel"
          autoPlay={true}
          timer={300}
          animation='fade'
          indicators={true}
          timeout={300}
          navButtonsAlwaysVisible={false}

        >
          {
            images.map(image => {
              return <ImagePaper key={image.id} image={image.image}/>
            })
          }
        </Carousel>
      </div>
    )
}

export default ImageCarousel;
