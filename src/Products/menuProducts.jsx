import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { BsBagDash, BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((res) => {
            setData(res.data.products)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
    
    return(
        <>
            <Grid m='10px 0' gridTemplateColumns={{base:'auto auto', md:"auto auto auto", xl:'auto auto auto auto auto'}} gap='10px' justifyContent='space-evenly'>
                {
                    data?.map((item, index) => (
                        <Box key={item.id} className="block_Cart" zIndex={5} overflow='hidden' borderRadius={'5px'} m={'0 5px'} p={{base:'5px', lg:"10px"}} h='100%' maxH='300px' maxW='230px'>
                            <Box h={{base:'60%', md: '60%'}} overflow='hidden' borderRadius="10px">
                                <Image src={item.thumbnail} alt="error is img" h='100%' w='100%' objectFit='cover'/>
                                <Button variant={"unstyled"} p={{ base: "0", lg: "5px" }} position={"absolute"} bg='rgba(116, 116, 116, 0.500)' right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <BsFillHeartFill fontSize='15px' className='LikeBtn' color={'rgb(255, 255, 255)'}/>
                                </Button>
                            </Box>
                            <Box h={{base:'40%', md:'40%'}} minH='70px' display='flex' flexDirection='column' justifyContent='space-between' w='100%' p='5px 0' position='relative'>
                                <Text fontSize={{base:"12px", lg:"15px"}} color='gray.600' fontWeight={600}>{item.title}</Text>
                                <Box >
                                    <Box display='flex' alignItems='center' justifyContent='space-between' position='absolute' bottom='5px' left='0' w='100%'>
                                        <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight="600">{item.price} $</Text>
                                        <Button variant='unset' bg='blue.300' colorScheme='blue' w={{base:'20%', lg: "50%"}} p={{base:'0', md:"5px 15px"}} h={{base: '35px', lg:"40px"}}>
                                            <BsBagDash />
                                            <Text display={{base: 'none', lg: "flex"}} ml='10px'>cart</Text>
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
        </>
    )
}
