import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { TodoContext } from "../Context/ContextTodo";


function TodoCart() {

    let { TodoList, setTodoList } = useContext(TodoContext)

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box  maxW='1300px' w='100%' p="5px 10px" minH='800px'>
                <Box w={'100%'} borderBottom='1px solid rgba(150,150,150,0.600)' position='relative' bgImage='https://www.iso.org/files/live/sites/isoorg/files/news/News_archive/2021/06/Ref2682/Ref2682.jpg/thumbnails/1200x300' bgSize='cover' bgRepeat='no-repeat' h='200px' borderRadius='10px' p='5px 0'>
                    <Text color='black' fontSize='2xl' fontFamily="monospace" w='100%' position='absolute' bottom='0' left='0' p='0 0 0 20px' bg='rgba(168, 133, 250, 0.384)'> 
                        Alisher
                    </Text>
                </Box>
                <Box w='100%' mt='10px'>
                    {
                        <Box display={TodoList.length ? 'none' : 'inline-block'} position='absolute' left='0' w='100%' m='auto'>
                            <Image m='10px auto' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png?f=webp" w={{base:"250px" ,lg:'350px'}}/>
                            <Text textAlign={"center"} fontSize={{base:"1xs" , lg:"2xl"}} color="rgb(89,49,244)" m='10px 0 5px'>вы еще ничего не заказали</Text>
                            <Link to="/">
                                <Button display={'block'} variant='unstyled' color='white' p='0 15px' m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                            </Link>
                        </Box>
                    }
                    {
                        TodoList.map((el, index) => {
                            return(
                                <Box key={index} className="HoverProdCart" boxShadow='0 0 10px rgba(172, 152, 253, 0.300)' bg='gray.100' w='100%' display='flex' alignItems='center' justifyContent='space-between' p={'10px 30px'} borderRadius='10px' overflow='hidden' mb='25px'>
                                    <Box w='110px'>
                                        <Image borderRadius='15px' h='100px' w='120px' objectFit='cover' src={ el.thumbnail }/>
                                    </Box>
                                    <Box>
                                        <Text color='gray.800' fontSize="16px" maxW='400px' textAlign='center' fontWeight="400">{ el.title }</Text>
                                    </Box>
                                    <Box display='flex' flexDirection='column' alignItems='center'>
                                        <Text color='green.400' fontWeight='600' fontSize='14px'>Подготовка товаров</Text>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </Box>
    )
}
export default TodoCart
