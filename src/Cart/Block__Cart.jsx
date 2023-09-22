import { Box, Button, ButtonGroup, Grid, Image, Text } from "@chakra-ui/react";
import { BsFillHeartFill, BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom"
import { StoreContext, useStore } from "../Context/Context";
import { useContext, useState } from "react";
import { LikeContext } from "../Context/ContextLike";

export default function Block__Cart() {

    let [ data, setData ] = useContext(StoreContext)
    let [ Like, setLike ] = useContext(LikeContext)

    function handelLike(id) {
        let Data = data.filter((el) => {
            return el.id == id
        })
        console.log(Like);
    }
    
    return (
            <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 8fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(6, 3fr)' }} gap={{ base: 4, md: 5 }}>
                {
                    data.slice(0, 30).map((item, index) => (
                        <Box key={index} overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} position={'relative'} maxW={'200px'}>
                            <Button onClick={() => handelLike(item.id)} variant={"unstyled"} p={{ base: "0", lg: "10px" }} position={"absolute"} right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <BsFillHeartFill fontSize={"20px"} color={'rgb(219, 219, 219)'}/>
                            </Button>
                            <Link to="/Products"  preventScrollReset={true}>
                                <Box overflow={'hidden'}>
                                    <Image w={"100%"} cursor={'pointer'} objectFit={"cover"} minH={'220px'} src={item.img} borderRadius='lg' className="block_Cart" />
                                </Box>
                            </Link>
                            <Box p={{base:'1px', md:"3px", lg:"5px"}}>
                                <Text fontSize="14px" color='gray.700' fontWeight={500} minH={'50px'} overflow={'hidden'}>{item.name}</Text>
                            </Box>
                            <Box mt='10px' p={{base:'1px', md:"3px", lg:"5px"}}>
                                <ButtonGroup spacing='2' display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'100%'}>
                                    <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight={"600"}>{item.price} som</Text>
                                    <Button variant='solid' colorScheme='blue'>
                                        <BsBagDash />
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>
    )
}
