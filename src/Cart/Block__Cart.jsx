import { Box, Button, ButtonGroup, Grid, Image, Text } from "@chakra-ui/react";
import { BsFillHeartFill, BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom"
import { StoreContext, useStore } from "../Context/Context";
import { useContext, useEffect, useState } from "react";
import { LikeContext } from "../Context/ContextLike";
import { ProductContext } from "../Context/ContextProduct";

export default function Block__Cart() {

    let [ data, setData ] = useContext(StoreContext)
    let [ Like, setLike ] = useContext(LikeContext)
    let { Product, setProduct } = useContext(ProductContext)

    let AddProduct = (Item) => {
        let idPro = []
        Product.map((el) => {
            idPro.push(el.id)
        })
        console.log(idPro);
        if (idPro.indexOf(Item.id) == -1) {
            setProduct((el) => [ ...el, Item ])
        }
        else{
            console.log('no');
        }
    }

    return (
            <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 3fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(6, 3fr)' }} gap={{ base: 2, md: 4 }}>
                {
                    data.slice(0, 60).map((item, index) => (
                        <Box key={index} className="block_Cart" overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} bg='gray.200' position={'relative'} p={{base:'2px', md:"4px", lg:"7px"}} maxW={'230px'}>
                            <Button onClick={() => setData[item.Like ? item.Like = false : item.Like = true]} variant={"unstyled"} p={{ base: "0", lg: "10px" }} position={"absolute"} right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <BsFillHeartFill fontSize={"20px"} color={item.Like ? 'red' : 'rgb(219, 219, 219)'}/>
                            </Button>
                            <Box overflow={'hidden'}>
                                <Image w={"100%"} cursor={'pointer'} objectFit={"cover"} minH={'160px'} maxH={'220px'} src={item.img} borderRadius='lg' />
                            </Box>
                            <Box p={{base:'2px', md:"4px", lg:"7px"}}>
                                <Text fontSize="14px" color='gray.700' fontWeight={500} minH={'40px'} overflow={'hidden'}>{item.title}</Text>
                            </Box>
                            <Box p={{base:'2px', md:"4px", lg:"7px"}} h='50px'>
                                <ButtonGroup spacing='2' display={'flex'} alignItems={'center'} position='absolute' bottom='5px' left='5px' right='5px' justifyContent={'space-between'} >
                                    <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight={"600"}>{item.price} som</Text>
                                    <Button onClick={() => AddProduct(item)} variant='solid' colorScheme='blue' >
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
