import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Box overflow={'hidden'}>
        <Slider {...settings}>
          <Box >
            <img src="https://www.galax.com/media/wysiwyg/corpsite/page/30series/gx/SG-website-banner_04.png" alt="error" className="CaruselImg"/>
          </Box>
          <Box >
            <img src="https://www.kfa2.com/media/wysiwyg/corpsite/section/ninezero-1920x600-k2.jpg" alt="error" className="CaruselImg"/>
          </Box>
        </Slider>
      </Box>
    );
  }
}
