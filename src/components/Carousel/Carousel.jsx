import React, {Component} from 'react';
import Carousel from 'react-material-ui-carousel';
import ImagePaper from "./ImagePaper";

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      timer: 300,
      animation: "fade",
      indicators: true,
      timeout: 300,
      navButtonsAlwaysVisible: false
    }
  }

  render() {
    return (
      <div style={{marginTop: "50px"}}>
        <Carousel
          className="SecondExample"
          autoPlay={this.state.autoPlay}
          timer={this.state.timer}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}

        >
          {/*{*/}
          {/*  items.map((item, index) => {*/}
          {/*    return <Project item={item} key={index}/>*/}
          {/*  })*/}
          {/*}*/}
        </Carousel>
      </div>
    )
  }
}

export default ImageCarousel;
