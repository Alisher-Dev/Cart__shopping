import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import Mini__box from "../Cart/Mini__box";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ContextProduct";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Shop() {

    let { Product, setProduct } = useContext(ProductContext)
    let [ price, setPrice ] = useState(0)
    
    const Removtodo = (id) => {
        let DelComponent = Product.filter((el) => {
            return el.id !== id
        })
        // setPrice((el) => el + el.price)
        // console.log(DelComponent);
    }

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px" position={"relative"} height={"auto"}>
                <Box minH="800px" display='flex'>
                <Box w='65%' p='5px'>
                    {
                        !Product.length &&
                        <Box position='absolute' w='100%' m='0 auto'>
                            <Image m={'0 auto'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7236766-5875081.png" h='320px' w='100%' objectFit={'contain'} alt="" />
                            <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"}>тут пока ничего нет</Text>
                            <Link to="/">
                                <Button display={'block'} variant='unstyled' p='0 15px' className="colorWhite" m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                            </Link>
                        </Box>
                    }
                    {
                        Product.length &&
                        Product.map((el, index) => {
                            return(
                                <Box key={index} className="HoverProdCart" bg='gray.100' w='100%' display='flex' alignItems='center' justifyContent='space-between' p={'10px 30px'} borderRadius='10px' overflow='hidden' mb='25px'>
                                    <Box w='110px'>
                                        <Image borderRadius='15px' src={ el.img }/>
                                    </Box>
                                    <Box>
                                        <Text color='gray.800' fontSize="16px" maxW='400px' textAlign='center' fontWeight="400">{ el.title }</Text>
                                    </Box>
                                    <Box display='flex' flexDirection='column' alignItems='center'>
                                        <Text color='blue.600' fontWeight='600' fontSize='14px'>{el.price} som</Text>
                                        <Box onClick={() => Removtodo(el.id)} display='flex' alignItems='center' justifyContent='space-between' w='90px' cursor='pointer' p='5px'>
                                            <AiTwotoneDelete color='gray' fontSize='18px'/>
                                            <Text color='gray.800' fontSize='14px' fontWeight='500'>Удалить</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
                    {
                        Product.length &&
                        <Box w='35%' minH='100%' p='5px'>
                            <Box w='100%' h='250px' bg='gray.100' borderRadius='10px' position='sticky' top='63px' p='20px 10px'>
                                <Text color='blue.500' fontSize='18px' textAlign='center' fontWeight='500' fontFamily='mono' mt='10px'>В корзине {Product.length} товара</Text>
                                <Text color='gray.700' fontSize='18px' textAlign='center' fontWeight='600' fontFamily='mono' mt='5px'>Общая сумма:</Text>
                                <Text color='black' fontSize='20px' textAlign='center' fontWeight='600' fontFamily='mono' mt='5px'>{price} som</Text>
                                <Box w='100%' h='1px' bg='rgba(37, 37, 37, 0.4)' mt='35px'></Box>
                                <Box display='flex' justifyContent='center' alignItems='center' h='85px'>
                                    <Button variant='unstyled' display='flex' p='30px 120px' bg='rgb(44, 17, 153)'>ОФОРМИТЬ</Button>
                                </Box>
                            </Box>
                        </Box>
                    }
                </Box>

                <Box mt={'30px'} display={{base:"none", "2xl":"block"}} >
                    <Text fontSize={{base:"20px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight={"bold"} color={"gray.600"}>Популярные категории</Text>
                    <Grid mt={"20px"} templateColumns={{base:'repeat(3, 3fr)', sm:'repeat(4, 3fr)', md:'repeat(5, 3fr)', lg:'repeat(6, 3fr)',xl:'repeat(7, 3fr)', "2xl":'repeat(9, 3fr)'}} gap={{base:"15px", lg:"10px"}}>
                        <Mini__box title="Xbox" img={"https://api.logobank.uz/media/logos_png/Artel-01.png"}/>
                        <Mini__box title="Asus" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/asus-512.png"}/>
                        <Mini__box title="oppo" img={"https://cdn-icons-png.flaticon.com/512/882/882745.png"}/>
                        <Mini__box title="Iphone" img={"https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png"}/>
                        <Mini__box title="Redmi" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/xiaomi-512.png"}/>
                        <Mini__box title="Samsung" img={"https://cdn-icons-png.flaticon.com/512/5969/5969247.png"}/>
                        <Mini__box title="vivo" img={"https://cdn-icons-png.flaticon.com/512/882/882711.png"}/>
                        <Mini__box title="hp" img={"https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/HP.png"}/>
                        <Mini__box title="NVIDIA" img={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-512.png"}/>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}