import { Box, Flex, Text } from "@chakra-ui/react";
import Products from "../Products/menuProducts";

export default function Main() {

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box w='100%' p="5px 10px">
                <Box display='flex' alignItems='center'>
                    {/* <Carusel /> */}
                    <Products />
                </Box>
                
                <Box mt={{base:'10px', xl:'40px'}}>
                    <Box display={'flex'} mb='15px' alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>Хиты продаж</Text>
                    </Box>
                </Box>

                <Box mt={{base:'10px', xl:'40px'}}>
                    <Box display={'flex'} mb='15px' alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>(api-category-name)</Text>
                    </Box>
                    <Products />
                </Box>

                <Flex minH={'150px'} maxH='320px' mt={"60px"} mb={"60px"} overflow={"hidden"} alignItems={"center"} justifyContent={"center"} borderRadius={"20px"}>
                    <img className="img__cart" src="https://www.amd.com/system/files/2021-05/795377-amd-W6800-video-still-1920x600.jpg" alt="error"/>
                </Flex>
            </Box>
        </Box>
    )
}
