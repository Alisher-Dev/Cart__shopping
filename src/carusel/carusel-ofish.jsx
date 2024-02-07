import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function CaruselOfisha() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <Box
            bg="blackAlpha.900"
            h="100%"
            display="flex"
            alignItems="center"
            position="relative"
            p={{ base: "0 10px", md: "10px 40px" }}
            borderRadius="10px">
            <Box textAlign="start">
              <Text
                fontWeight="500"
                color="white"
                fontSize={{
                  base: "20px",
                  sm: "26px",
                  xl: "28px",
                }}>
                Airpods
              </Text>
              <Text
                maxW={{ base: "200px", md: "300px" }}
                m="5px 0"
                color="white"
                fontSize={{
                  base: "13px",
                  sm: "17px",
                  xl: "20px",
                }}>
                There are many variations of passages
              </Text>
              <Text
                fontWeight="500"
                color="red.500"
                fontSize={{
                  base: "14px",
                  sm: "18px",
                  xl: "20px",
                }}>
                $99.00
              </Text>
            </Box>
            <Image
              position="absolute"
              right={{ base: "0px", md: "10px" }}
              src="https://www.pngmart.com/files/13/Airpods-PNG-HD.png"
              alt="error in img"
              w={{ base: "180px", sm: "250px", lg: "300px", xl: "400px" }}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="blackAlpha.900"
            h="100%"
            display="flex"
            alignItems="center"
            position="relative"
            p={{ base: "0 10px", md: "10px 40px" }}
            borderRadius="10px">
            <Box textAlign="start">
              <Text
                fontWeight="500"
                color="white"
                fontSize={{
                  base: "24px",
                  sm: "26px",
                  xl: "28px",
                }}>
                Airpods
              </Text>
              <Text
                maxW={{ base: "200px", md: "300px" }}
                m="5px 0"
                color="white"
                fontSize={{
                  base: "15px",
                  sm: "17px",
                  xl: "20px",
                }}>
                There are many variations of passages
              </Text>
              <Text
                fontWeight="500"
                color="red.500"
                fontSize={{
                  base: "17px",
                  sm: "18px",
                  xl: "20px",
                }}>
                $99.00
              </Text>
            </Box>
            <Image
              position="absolute"
              right={{ base: "0px", md: "10px" }}
              src="https://www.pngmart.com/files/13/Airpods-PNG-HD.png"
              alt="error in img"
              w={{ base: "180px", sm: "250px", lg: "300px", xl: "400px" }}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function CaruselTopProduct() {
  return (
    <Box
      className="boxImageCarusel"
      w={{ base: "60%", xl: "50%" }}
      position="relative"
      bg="blackAlpha.900"
      h="100%"
      display={{ base: "none", lg: "flex" }}
      alignItems="center"
      borderRadius="10px">
      <Box p="5px 20px">
        <Text
          fontWeight="500"
          color="white"
          fontSize={{
            base: "20px",
            sm: "22px",
            xl: "24px",
          }}>
          New Collection
        </Text>
        <Text
          fontWeight="500"
          color="white"
          fontSize={{
            base: "13px",
            sm: "15px",
            xl: "17px",
          }}>
          Modern mobile
        </Text>
        <Text
          fontWeight="500"
          color="red.500"
          fontSize={{
            base: "17px",
            sm: "18px",
            xl: "20px",
          }}>
          $99.00
        </Text>
      </Box>
      <Image
        className="tronsitionImg"
        position="absolute"
        right="10px"
        src="https://ongpng.com/wp-content/uploads/2023/03/6.boat_xtend_1500x1500.png"
        alt="error"
        w="50%"
      />
    </Box>
  );
}
