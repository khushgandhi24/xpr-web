import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import React from "react";

const Comments = () => {
  return (
    <CarouselProvider
      isPlaying={true}
      naturalSlideWidth={100}
      naturalSlideHeight={200}
      totalSlides={3}
      infinite={true}
      isIntrinsicHeight={true}
    >
      <Slider>
        <Slide index={0} className="text-2xl text-center">
          I am the first Slide.
        </Slide>
        <Slide index={1} className="text-2xl text-center">
          I am the second Slide.
        </Slide>
        <Slide index={2} className="text-2xl text-center">
          I am the third Slide.
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Comments;
