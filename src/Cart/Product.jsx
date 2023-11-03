import { Box, Button, ButtonGroup, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { StoreContext } from "../Context/Context"
import { ProductContext } from "../Context/ContextProduct"
import { BsBagDash, BsFillHeartFill } from "react-icons/bs"

function Product() {

    let [ data ] = useContext(StoreContext)
    let { Product, setProduct } = useContext(ProductContext)
    let { Like, setLike } = useContext(ProductContext)
    let [ imgTodo, setimgTodo ] = useState('')
    let params = useParams()

    let TodoCart = data.filter((el) => {
        return el.id === +params.id
    })
    
    let categoryData = data.filter((el) => {
        if (TodoCart[0].category === el.category) {
            return el
        }
    })

    let AddProduct = (Item) => {
        let idPro = []
        Product.map((el) => {
            return idPro.push(el.id)
        })
        if (idPro.indexOf(Item.id) === -1) {
            setProduct((el) => [ ...el, Item ])
        }
    }

    let AddLike = (Item) => {
        let idPro = []
        Like.map(el => idPro.push(el.id))
        if (idPro.indexOf(Item.id) === -1) {
            setLike((el) => [ ...el, Item ])   
        }
        else{
            let liketodo = Like.filter((el) => {
                return el.id !== Item.id
            })
            setLike(liketodo)
        }
    }

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px">
                <Grid templateColumns={{base:"repeat(1, 1fr)", lg:'repeat(2, 1fr)'}} gap={5}>
                    {
                        TodoCart.map((item, index) => (
                            <>
                                <Box key={index} w='100%' h='450px' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box h='100%' w={{base:'90px', lg:'20%'}} mr='5px' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p={{base:'5px', lg:'10px 15px'}} overflow='auto' >
                                        {
                                            item.images.map((iteM, indeX) => (
                                                <Image key={indeX} onClick={() => setimgTodo(iteM)} src={iteM} w='100%' h='120px' objectFit='contain' mt='5px' p='0 0 10px' cursor='pointer' borderBottom='1px solid gray'/>
                                            ))
                                        }
                                    </Box>
                                    <Box w={{base:'86%', lg:'78%'}} position='relative' h='100%' overflow='hidden' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)'>
                                        <Image h='100%' w='100%' objectFit='contain' src={imgTodo ? imgTodo : item.thumbnail}/>
                                        <Button variant={"unstyled"} onClick={() => AddLike(item)} position={"absolute"} bg='rgba(116, 116, 116, 0.500)' right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                            <BsFillHeartFill fontSize='15px' color={'rgb(255, 255, 255)'}/>
                                        </Button>
                                    </Box>
                                </Box>
                                <Box w='100%' h='450px' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box w='100%' h='100%' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p='10px' position='relative'>
                                        <Text fontSize={{base:"14px", sm:"16px", lg:'18px'}} mb='10px' color='gray.700' fontWeight={700}>{item.title}</Text>
                                        <Box display='flex' alignItems='center' mb='15px'>
                                            <Image w={{base:'12px', lg:'16px'}} mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Text ml='5px' color='black' fontSize={{base:"14px", sm:"14px", lg:'16px'}} fontWeight='600' fontFamily='heading'>{ item.rating }</Text>
                                        </Box>
                                        {/* <Text fontSize={{base:"14px", lg:'16px'}} mb='10px' color='rgb(51, 41, 92)' fontWeight={400} fontFamily='monospace'> {item.stock}</Text> */}
                                        <Text fontSize={{base:"14px", sm:"16px", lg:'18px'}} mb='10px' color='rgb(99, 88, 255)' fontWeight={400} fontFamily='monospace'>цена товара {item.price}$</Text>
                                        <Text fontSize={{base:"14px", sm:"16px", lg:'16px'}} mb='10px' color='gray.700' fontWeight={400}>{item.description}</Text>
                                        <Box position='absolute' bottom='10px' left='8px' right='8px' display='flex'>
                                            <Button className='buton' onClick={() => AddProduct(item)} variant='unstyled' border='1px solid rgba(56, 86, 255, 0.897)' color='rgba(56, 86, 255, 0.897)' w='50%' p={{base:'5px', sm:'5px 20px'}} fontSize={{base:"12px", sm:"14px", lg:'16px'}} mr='10px' >Добавить в корзину</Button>
                                            <Link className="link" to={`/Decor/${item.id}`}>
                                                <Button className='buton' variant='unstyled' border='1px solid rgba(56, 86, 255, 0.897)' color='rgba(56, 86, 255, 0.897)' w='100%' fontSize={{base:"12px", sm:"14px", lg:'16px'}} p='5px 20px'>Купить в 1 клик</Button>
                                            </Link>
                                        </Box>
                                    </Box>
                                </Box>
                                <GridItem colSpan={{base:1, lg:2}} w='100%' h='auto' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box w='100%' h='100%' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p='10px' >
                                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} mb='10px' fontWeight="medium" color={"gray.700"}>похожие товары</Text>
                                        <Grid templateColumns={{ base: 'repeat(2, 3fr)', sm: 'repeat(2, 3fr)', md: 'repeat(3, 3fr)', lg: 'repeat(4, 3fr)', xl: 'repeat(5, 3fr)', "2xl": 'repeat(5, 3fr)' }} gap={{ base: 2, md: 4 }} w='100%' >
                                            {
                                                categoryData.slice(0, 5).map((item, index) => (
                                                    <Box key={index} className="block_Cart" zIndex={5} overflow={'hidden'} borderRadius={'5px'} m={'0 auto'} p={{base:'2px', md:"4px", lg:"7px"}} w='95%' minH='300px'>
                                                        <Button variant={"unstyled"} onClick={() => AddLike(item)} p={{ base: "0", lg: "5px" }} position={"absolute"} bg='rgba(116, 116, 116, 0.500)' right={0} top={0} zIndex={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                                            <BsFillHeartFill fontSize='15px' color={'rgb(255, 255, 255)'}/>
                                                        </Button>
                                                        <Link to={`/products/${item.id}`}>
                                                            <Box overflow={'hidden'} maxH={{base:'150px', lg:'200px'}} h='100%' p={{base:"5px", md:"2px"}}>
                                                                <Image cursor={'pointer'} w='100%' h='100%' objectFit="contain" src={item.thumbnail} borderRadius='lg' />
                                                            </Box>
                                                        </Link>
                                                        <Box h='100px' overflow='hidden' p='5px'>
                                                            <Text fontSize={{base:"12px", lg:"14px"}} color='gray.600' fontWeight={700} overflow={'hidden'}>{item.title}</Text>
                                                            <Text fontSize="12px" color='gray.500' fontWeight={400} overflow={'hidden'}>{item.description}</Text>
                                                        </Box>
                                                        <Box display='flex' alignItems='center' justifyContent='space-between'>
                                                            <Box display='flex' alignItems='center'>
                                                                <Image w='12px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                                                <Text ml='5px' color='black' fontSize='12px' fontFamily='sans-serif'>{ item.rating }</Text>
                                                            </Box>
                                                            <Text color='blue.600' fontSize={{ base: "13px", sm: '14px', md: "16px" }} fontWeight="600">{item.price} $</Text>
                                                            <Button onClick={() => AddProduct(item)} variant='solid' colorScheme='blue' p={{base:'0', md:"5px 15px"}} >
                                                                <BsBagDash />
                                                            </Button>
                                                        </Box>
                                                    </Box>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                </GridItem>
                            </>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
export default Product
