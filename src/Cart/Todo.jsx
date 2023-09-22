import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function TodoCart() {
    return(
        <>
        <Box minH='800px' p={{base:"0 15px",md:"0 50px",lg:"0 60px", xl:"0 100px"}} bg={"gray.100"}>
            <Box w={'100%'} borderBottom='1px solid rgba(150,150,150,0.600)' p='5px 0'>
                <Text color='black' fontSize='2xl' fontWeight='600'> 
                    Alisher
                </Text>
            </Box>
            <Box w='100%'>
                <Image m='10px auto' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png?f=webp" w={{base:"250px" ,lg:'350px'}}/>
                <Text textAlign={"center"} fontSize={{base:"1xs" , lg:"2xl"}} color="rgb(89,49,244)" m='10px 0 5px'>вы еще ничего не заказали</Text>
                <Link to="/">
                    <Button display={'block'} variant='unstyled' p='0 15px' m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                </Link>
            </Box>
        </Box>
        </>
    )
}
export default TodoCart
