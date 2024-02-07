import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { BsBagDash, BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Grid
        m={{ base: "0", md: "10px 0" }}
        gridTemplateColumns={{
          base: "auto auto",
          md: "auto auto auto",
          lg: "auto auto auto auto",
          xl: "auto auto auto auto auto",
        }}
        gap="10px"
        justifyContent="space-evenly">
        {data?.map((item, index) => (
          <Box
            key={item.id}
            className="imagesCarusel"
            overflow="hidden"
            borderRadius="5px"
            m={"30px auto"}
            p={{ base: "5px", lg: "10px" }}
            boxShadow="0 0 10px rgba(172, 152, 253, 0.4)"
            h={{ base: "90%", sm: "280px", lg: "350px" }}
            w="100%"
            maxW="260px">
            <Box
              h="70%"
              overflow="hidden"
              borderRadius="10px"
              position="relative">
              <Image
                src={item.thumbnail}
                alt="error is img"
                h="100%"
                w="100%"
                objectFit="cover"
              />
              <Button
                className="btnLike"
                opacity="0"
                variant="unstyled"
                p={{ base: "0", lg: "5px" }}
                transition="all 0.5s ease"
                position="absolute"
                bg="rgba(49, 49, 49, 0.7)"
                bottom="-10px"
                zIndex="2"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <BsFillHeartFill
                  fontSize="15px"
                  className="LikeBtn"
                  color="rgb(255, 255, 255)"
                />
              </Button>
              <Button
                className="btnLike"
                opacity="0"
                variant="unstyled"
                p={{ base: "0", lg: "5px" }}
                transition="all 0.5s ease"
                position="absolute"
                bg="rgba(49, 49, 49, 0.7)"
                bottom="-10px"
                right="0"
                zIndex="2"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <BsBagDash
                  fontSize="15px"
                  className="LikeBtn"
                  color="rgb(255, 255, 255)"
                />
              </Button>
            </Box>
            <Box
              h="30%"
              textAlign="center"
              minH="70px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              w="100%"
              p="5px 0"
              position="relative">
              <Box
                display="flex"
                w="100%"
                alignItems="center"
                justifyContent="center">
                <FaStar size="18px" color="rgb(214, 218, 0)" />
                <Text
                  fontSize={{ base: "12px", lg: "15px" }}
                  color="gray.600"
                  ml="5px"
                  fontWeight={600}>
                  {item.rating}
                </Text>
              </Box>
              <Text
                fontSize={{ base: "12px", lg: "15px" }}
                color="gray.600"
                fontWeight={600}>
                {item.title}
              </Text>
              <Box>
                <Box>
                  <Text
                    color="blue.600"
                    fontSize={{ base: "13px", sm: "14px", md: "16px" }}
                    fontWeight="600">
                    {item.price} $
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
}
