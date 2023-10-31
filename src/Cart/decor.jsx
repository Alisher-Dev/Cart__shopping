import { Box, Button, Checkbox, Image, Input, InputGroup, InputLeftAddon, Select, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import { StoreContext } from "../Context/Context"
import { TodoContext } from "../Context/ContextTodo"

function Decor() {
    let [ data ] = useContext(StoreContext)
    let { TodoList, setTodoList } = useContext(TodoContext)
    let params = useParams()

    let TodoCart = data.filter((el) => {
        return el.id === +params.id
    })

    const todoAdd = () => {
        let idTodo = []
        TodoList.map(el => idTodo.push(el.id))
        TodoCart.map((item) => {
            if (idTodo.includes(item.id)) {
                return 'da'
            }
            return setTodoList((todo) => [...todo, item])
        })
    }
    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
        <Box maxW='1300px' display='flex' flexDirection={{base:'column-reverse', lg:'unset'}} w='100%' p="5px 10px">
                <Box w={{base:'100%', lg:'70%'}} minH='80vh' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' borderRadius='10px' m='5px' p='20px'>
                    <Box display='flex' justifyContent='space-between' w='100%' mb='40px'>
                        <InputGroup w='48%'>
                            <InputLeftAddon color='gray' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' children='+998' />
                            <Input className='InputPlaceholder' border='none' type='number' color='black' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='100%' placeholder='phone number' />
                        </InputGroup>
                        <Input className='InputPlaceholder' border='none' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='48%' display='inline' variant='outline' color='black' placeholder='Ф.И.О' />
                    </Box>
                    <Box display='flex' justifyContent='space-between' w='100%' mb='40px'>
                        <Select color='gray' border='none' w='48%' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)'>
                            <option value='option2'>Tashkent</option>
                            <option value='option3'>Samarkand</option>
                            <option value='option1'>Xorazm</option>
                            <option value='option1'>Buxara</option>
                            <option value='option1'>Shaxrisabz</option>
                            <option value='option1'>Muynak</option>
                            <option value='option1'>Zamin</option>
                            <option value='option1'>Termiz</option>
                            <option value='option1'>Gulistan</option>
                            <option value='option1'>Nukus</option>
                            <option value='option1'>Namangan</option>
                            <option value='option1'>Karshi</option>
                            <option value='option1'>Navoi</option>
                            <option value='option1'>Kokand</option>
                            <option value='option1'>Andijan</option>
                            <option value='option1'>Fergana</option>
                        </Select>
                        <Input className='InputPlaceholder' border='none' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='48%' display='inline' variant='outline' color='black' placeholder='Город / Район' />
                    </Box>
                    <Input className='InputPlaceholder' border='none' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='100%' mb='40px' display='inline' variant='outline' color='black' placeholder='Ориентир' />

                    <Input className='InputPlaceholder' border='none' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' w='100%' mb='40px' display='inline' variant='outline' color='black' placeholder='Адрес' />

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.63404501195356!2d60.60756128665114!3d41.55999370635164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9d386fdaa47%3A0xaedefecf4c0be911!2sData%20ta&#39;lim%20stansiyasi!5e0!3m2!1sru!2sus!4v1698769890595!5m2!1sru!2sus" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    <Checkbox defaultChecked colorScheme='orange' size='md' color='gray.700' mt='40px' fontWeight='600'>Я согласен с правилами покупки товаров</Checkbox>

                    <Box display='flex' alignItems='center' mt='40px'>
                        <Link to='/Cart'>
                            <Button onClick={() => todoAdd()} color='rgba(0, 0, 0, 0.800)' className="BtnHover" mr='10px' boxShadow='0 0 5px rgba(149, 148, 248, 0.5)'>заказать</Button>
                        </Link>
                        <Link to={-1}>
                            <Button color='rgba(0, 0, 0, 0.800)' className="BtnHover" boxShadow='0 0 10px rgba(149, 148, 248, 0.5)'>назад</Button>
                        </Link>
                    </Box>
                </Box>


                <Box w={{base:'100%', lg:'30%'}} minH='100%' p='5px'>
                    <Box w='100%' minH='200px' boxShadow='0 0 15px rgba(172, 152, 253, 0.300)' borderRadius='10px' position='sticky' top='10px' p='20px 10px'>
                        <Text color='blue.500' fontSize='18px' textAlign='center' fontWeight='500' fontFamily='mono' mt='10px'>Цена товара 21$</Text>
                        <Box w='100%' h='1px' bg='rgba(37, 37, 37, 0.4)' mt='35px'>
                            {
                                TodoCart.map((item, index) => (
                                    <Box key={index} p='5px' display='flex' justifyContent='space-evenly' alignItems='center'>
                                        <Image src={item.thumbnail} borderRadius='10px' objectFit='contain' w='90px' h='90px'/>
                                        <Text fontSize={{base:"14px", sm:"16px", lg:'16px'}} mb='10px' textAlign='center' color='gray.700' fontWeight={400}>{item.title}</Text>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Decor
