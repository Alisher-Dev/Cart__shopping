import { Box, Button, ButtonGroup, Grid, Image, Skeleton, SkeletonCircle, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import { BsFillHeartFill, BsBagDash } from "react-icons/bs";
import { Link } from "react-router-dom"
import { StoreContext, useStore } from "../Context/Context";
import { useContext, useEffect, useState } from "react";
import { LikeContext } from "../Context/ContextLike";
import { ProductContext } from "../Context/ContextProduct";

export default function Block__Cart() {

    let [ data, setData ] = useContext(StoreContext)
    let { Product, setProduct } = useContext(ProductContext)

    let AddProduct = (Item) => {
        let idPro = []
        Product.map((el) => {
            idPro.push(el.id)
        })
        if (idPro.indexOf(Item.id) == -1) {
            setProduct((el) => [ ...el, Item ])
        }
    }

    let [ openProd, setopenProd ] = useState(false)
    let [ TodoProd, setTodoProd ] = useState([])

    return (
        <>
            <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 3fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(6, 3fr)' }} gap={{ base: 2, md: 4 }}>
                {
                    !data.length && 
                    <>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                        <Box padding='2' boxShadow='lg'  bg='gray.200'><Skeleton><div>contents wrapped</div><div>contents wrapped</div><div>contents wrapped</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div><div>won't be visible</div></Skeleton><SkeletonText mt='3' noOfLines={6} spacing='3' skeletonHeight='1' /></Box>
                    </>
                }
                {
                    data.slice(0, 60).map((item, index) => (
                        <Box key={index} className="block_Cart" overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} bg='gray.200' position={'relative'} p={{base:'2px', md:"4px", lg:"7px"}} maxW={'230px'} w='100%'>
                            <Button onClick={() => setData[item.Like ? item.Like = false : item.Like = true]} variant={"unstyled"} p={{ base: "0", lg: "10px" }} position={"absolute"} right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                <BsFillHeartFill fontSize={"20px"} color={item.Like ? 'red' : 'rgb(219, 219, 219)'}/>
                            </Button>
                            <Box overflow={'hidden'} onClick={() => [setopenProd(true),setTodoProd(item)]}>
                                <Image cursor={'pointer'} w='100%' objectFit={"fill"} h='190px' src={item.thumbnail} borderRadius='lg' />
                            </Box>
                            <Box p={{base:'2px', md:"4px", lg:"7px"}} position='relative'>
                                <Text fontSize="12px" color='gray.700' fontWeight={500} overflow={'hidden'}>{item.title}</Text>
                                <Box display='flex' alignItems='center'>
                                    <Image w='12px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                    <Text ml='5px' color='black' fontSize='12px' fontFamily='sans-serif'>{ item.rating }</Text>
                                </Box>
                            </Box>
                            <Box p={{base:'2px', md:"4px", lg:"7px"}} h='30px'>
                                <ButtonGroup spacing='2' display={'flex'} alignItems={'center'} position='absolute' bottom='5px' left='5px' right='5px' justifyContent={'space-between'} >
                                    <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight={"600"}>{item.price} $</Text>
                                    <Button onClick={() => AddProduct(item)} variant='solid' colorScheme='blue' >
                                        <BsBagDash />
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Box>
                    ))
                }
            </Grid>

            <Box w='100vw' h='100vh' position='fixed' top='0' left='0' bg='white' zIndex='10' display={openProd ? 'flex' : 'none'} alignItems='center' justifyContent='center'>
                <Box maxW='1300px' w='100%' p="10px" h='90%' bg='gray.300' borderRadius='10px'>
                    <Grid templateColumns='repeat(2, 1fr)' h='60%' gap={2}>
                        <Box w='100%' h='100%' bg='gray.100' display='flex'>
                            <Box w='20%' h='100%' bg='gray.100' mr='8px'>
                            </Box>
                            <Box w='85%' h='100%' bg='gray.100'>
                                <Image src={TodoProd.thumbnail} w='510px' h='510px' objectFit='fill'/>
                            </Box>
                        </Box>
                        <Box w='100%' h='100%' bg='gray.100' p='5px'>
                            <Text color='black' fontSize='20px' mb='20px'>{TodoProd.title}</Text>
                            <Text color='black' fontSize='18px'>{TodoProd.description}</Text>
                        </Box>
                    </Grid>

                    <Box w='100%' h='8px' bg='gray.300'></Box>

                    <Box w='100%' h='39%' bg='gray.100'>

                    </Box>
                    <Button variant='unstyled' position='absolute' left='10px' top='10px' fontSize='18px' bg='gray.200' onClick={() => setopenProd(false)} color={"black"}>X</Button>
                </Box>
            </Box>

        </>
    )
}
