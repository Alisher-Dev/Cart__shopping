import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StoreContext } from "../Context/Context"
import { ProductContext } from "../Context/ContextProduct"

function Product() {

    let params = useParams()

    let [ data, setData ] = useContext(StoreContext)

    let TodoCart = data.filter((el) => {
        return el.id == params.id
    })
    
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

    let [ imgTodo, setimgTodo ] = useState(TodoCart.map((el) => {
        return el.thumbnail
    }))

    let addImageProduct = (img) => {
        console.log(img);
        setimgTodo(img)
    }

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px">
                <Grid templateColumns='repeat(2, 1fr)' gap={5}>
                    {
                        TodoCart.map((item, index) => (
                            <>
                                <Box key={index} w='100%' h='450px' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box h='100%' w='20%' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p='10px 15px' overflow='auto' >
                                        {
                                            item.images.map((iteM, indeX) => (
                                                <Image key={indeX} onClick={() => addImageProduct(iteM)} src={iteM} w='100%' h='120px' objectFit='contain' mt='5px' p='0 0 10px' cursor='pointer' borderBottom='1px solid gray'/>
                                            ))
                                        }
                                    </Box>
                                    <Box w='78%' h='100%' overflow='hidden' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)'>
                                        <Image h='100%' w='100%' objectFit='contain' src={imgTodo}/>
                                    </Box>
                                </Box>
                                <Box w='100%' h='450px' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box w='100%' h='100%' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p='10px' position='relative'>
                                        <Text fontSize="18px" mb='10px' color='gray.700' fontWeight={700}>{item.title}</Text>
                                        <Box display='flex' alignItems='center' mb='15px'>
                                            <Image w='16px' mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Image w='16px' mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Image w='16px' mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Image w='16px' mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Image w='16px' mr='2px' src='https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png'/>
                                            <Text ml='15px' color='black' fontSize='16px' fontWeight='700' fontFamily='sans-serif'>{ item.rating }</Text>
                                        </Box>
                                        <Text fontSize="18px" mb='10px' color='gray.700' fontWeight={400}>{item.description}</Text>
                                        <Text fontSize="22px" mb='10px' color='rgb(51, 41, 92)' fontWeight={400} fontFamily='monospace'> {item.stock}</Text>
                                        <Text fontSize="22px" mb='10px' color='rgb(51, 41, 92)' fontWeight={400} fontFamily='monospace'>{item.price} $</Text>
                                        <Box position='absolute' bottom='10px' left='8px' right='0' display='flex'>
                                            <Button className='buton' onClick={() => AddProduct(item)} variant='unstyled' border='1px solid rgba(56, 86, 255, 0.897)' color='rgba(56, 86, 255, 0.897)' w='50%' p='5px 20px' mr='10px' >Добавить в корзину</Button>
                                            <Button className='buton' variant='unstyled' border='1px solid rgba(56, 86, 255, 0.897)' color='rgba(56, 86, 255, 0.897)' w='50%' p='5px 20px'>Купить в 1 клик</Button>
                                        </Box>
                                    </Box>
                                </Box>
                                <GridItem colSpan={2} w='100%' h='450px' display='flex' alignItems='center' p='10px 5px' justifyContent='space-between'>
                                    <Box w='100%' h='100%' borderRadius='10px' bg='white' boxShadow='0 0 15px rgba(156, 156, 156, 0.400)' p='10px'>
                                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>похожие товары</Text>
                                        <Box>
                                            
                                        </Box>
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
