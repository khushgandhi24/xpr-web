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
        <Slide index={0} className="text-2xl italic text-center">
          To keep a customer demands as much skill as to win one
        </Slide>
        <Slide index={1} className="text-2xl italic text-center">
          Quality is remembered long after price is forgotten.
        </Slide>
        <Slide index={2} className="text-2xl italic text-center">
          There are no traffic jams along the extra mile.
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default Comments;
