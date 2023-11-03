import { Box, Button, Image, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TodoContext } from "../Context/ContextTodo";
import { LoginContext } from "../Context/ContextLogin";


function TodoCart() {

    let { TodoList, setTodoList } = useContext(TodoContext)
    let { Login, setLogin } = useContext(LoginContext)
    let [color, setcolor] = useState(true)
    let [input, setinput] = useState('')

    function loginProfil() {
        if (input.length < 9) {
            return setcolor(false)
        }
        setcolor(true)
        return setLogin(input)
    }

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box  maxW='1300px' w='100%' p="5px 10px" minH='800px'>
                <Box w='100%' mt='10px'>
                    <Box display={TodoList.length ? 'none' : 'flex'} alignItems='center' justifyContent='center' bg={'white'} boxShadow='0 0 10px rgba(172, 152, 253, 0.300)' w='100%' h='50vh'>
                        <Box w='100%' p='0 30px'>
                            <Text fontSize={{base:"18px", sm:"20px", lg:'22px'}} mb='10px' textAlign='center' color='gray.800' fontWeight={600}>Введите номер телефона</Text>
                            <Text fontSize={{base:"14px", lg:'16px'}} mb='10px' textAlign='center' color='gray.500' fontWeight={400}>Отправим смс с кодом подтверждения</Text>
                            <InputGroup w={{base:'100%', md:'500px'}} m='0 auto 20px'>
                                <InputLeftAddon color='gray' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' children='+998' />
                                <Input className='InputPlaceholder' onChange={(e) => setinput(e.target.value)} border={color ? 'none' : '1px solid red'} type='number' color='black' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='100%' placeholder='phone number' />
                            </InputGroup>
                            <Button onClick={() => loginProfil()} color='rgba(0, 0, 0, 0.800)' className="BtnHover" w={{base:'100%', md:'500px'}} m='0 auto' display='block' boxShadow='0 0 5px rgba(149, 148, 248, 0.5)'>Получить код</Button>
                        </Box>
                    </Box>
                    {
                        TodoList.map((el, index) => {
                            return(
                                <Box key={index} className="HoverProdCart" boxShadow='0 0 10px rgba(172, 152, 253, 0.300)' bg='gray.100' w='100%' display='flex' alignItems='center' justifyContent='space-between' p={{base:'5px', md:'10px 30px'}} borderRadius='10px' overflow='hidden' mb='25px'>
                                    <Box w='110px'>
                                        <Image borderRadius='15px' h={{base:'80px', md:'100px'}} w={{base:'100px', md:'120px'}} objectFit='cover' src={ el.thumbnail }/>
                                    </Box>
                                    <Box>
                                        <Text color='gray.800' fontSize={{base:"13px", lg:"15px"}} maxW='400px' textAlign='center' fontWeight="400">{ el.title }</Text>
                                    </Box>
                                    <Box display='flex' flexDirection='column' alignItems='center'>
                                        <Text color='green.400' fontWeight='600' textAlign='center' fontSize={{base:"13px", lg:"15px"}}>Подготовка товаров</Text>
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
