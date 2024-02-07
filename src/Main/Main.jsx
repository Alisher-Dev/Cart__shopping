import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Products from "../Products/menuProducts";
import CaruselProduct from "../carusel/carusel-product";
import CaruselOfisha from "../carusel/carusel-ofish";

export default function Main() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box w="100%" p="5px 10px" mt="20px">
        <Box
          w="100%"
          h={{ base: "200px", sm: "250px", md: "350px", xl: "450px" }}
          bg="gray.200"
          display="flex"
          gap="10px"
          alignItems="center">
          <CaruselOfisha />
          <Box
            className="boxImageCarusel"
            w={{ base: "60%", xl: "50%" }}
            position="relative"
            bg="blackAlpha.900"
            h="100%"
            display={{ base: "none", lg: "flex" }}
            alignItems="center"
            borderRadius="10px">
            <Box>
              <Text
                ml="10px"
                fontWeight="500"
                color="white"
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  xl: "18px",
                }}>
                MODERN MOBILE
              </Text>
              <Text
                ml="10px"
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
                ml="10px"
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
        </Box>

        <Box
          display="flex"
          position="relative"
          alignItems="center"
          boxShadow="10px 10px 5px rgba(172, 152, 253, 0.3)"
          justifyContent="center"
          borderRadius="5px"
          mt="25px"
          border="1px solid rgb(90,49,244)">
          <Box
            bg="white"
            position="absolute"
            top="-20px"
            w="90%"
            zIndex="2"
            borderRadius="10px">
            <Text
              fontSize={{ base: "16px", sm: "22px", lg: "26px", xl: "26px" }}
              fontWeight="medium"
              p="0 20px"
              color={"gray.700"}>
              Хиты продаж
            </Text>
          </Box>
          <Box w="100%" display={{ base: "none", md: "none", lg: "flex" }}>
            <CaruselProduct grids="4" />
          </Box>
          <Box w="100%" display={{ base: "none", md: "flex", lg: "none" }}>
            <CaruselProduct grids="3" />
          </Box>
          <Box w="100%" display={{ base: "flex", md: "none", lg: "none" }}>
            <CaruselProduct grids="2" />
          </Box>
        </Box>

        {/* <Box mt={{base:'10px', xl:'40px'}}>
                    <Box display={'flex'} mb='15px' alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>Хиты продаж</Text>
                    </Box>
                </Box> */}

        <Box mt={{ base: "10px", xl: "40px" }}>
          <Box
            display={"flex"}
            mb={{ base: "0", md: "15px" }}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Text
              fontSize={{ base: "16px", sm: "22px", lg: "26px", xl: "26px" }}
              fontWeight="medium"
              color={"gray.700"}>
              (api-category-name)
            </Text>
          </Box>
          <Products />
        </Box>

        <Flex
          minH={"150px"}
          maxH="320px"
          mt={"60px"}
          mb={"60px"}
          overflow={"hidden"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"20px"}>
          <img
            className="img__cart"
            src="https://www.amd.com/system/files/2021-05/795377-amd-W6800-video-still-1920x600.jpg"
            alt="error"
          />
        </Flex>
      </Box>
    </Box>
  );
}
