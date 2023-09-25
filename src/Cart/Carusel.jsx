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
      <Box overflow={'hidden'} cursor='pointer'>
        <Slider {...settings} >
          <Box >
            <img src="https://overclockers.ru/st/legacy/blog/151718/318633_O.jpg" alt="error" className="CaruselImg"/>
          </Box>
          <Box >
            <img src="https://overclockers.ru/st/legacy/blog/151718/286636_O.jpg" alt="error" className="CaruselImg"/>
          </Box>
        </Slider>
      </Box>
    );
  }
}
