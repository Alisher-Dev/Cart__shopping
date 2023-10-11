import { Box, Text, } from "@chakra-ui/react";
import img__icon from "../img/logo.png"
import "../style.css"

export default function Footer() {
    return(
        <Box bg={"white"} display='flex' justifyContent='center'>
            <Box display={"flex"} justifyContent={"space-between"} mt='10px' flexDirection={{base:"column",lg:"unset"}} maxW='1300px' w='100%' p="20px 10px">
                <Box w={{base:"100%",lg:'20%' , xl:"25%"}} textAlign={{base:"center", lg:"start"}} display={{base:"flex", lg:"block"}} flexDirection={{base:"column", lg:"unset"}} alignItems={"center"} justifyContent={"center"}>
                    <img className="Logo__Chor" src={img__icon} width={'180px'} alt="" />
                    <Text fontSize='sm' color={"#6E7191"} m={"10px 0 20px"}>Оптовая продажа запчастей <br /> на все виды автотранспортных средств</Text>
                    <Text fontSize='sm' color={"#6E7191"} m={"0 0 30px"}>ИП Хомченко Максим Альбертович <br /> ОГРНИП 000000000</Text>
                    <Text fontSize='xs' color={"#6E7191"} >1993 - 2022 © АвтоЭлектрика <br /> Политика конфиденциальности</Text>
                </Box>
                <Box w={{base:"20%", xl:"15%"}} display={{base:"none", lg:"inline-block"}}>
                    <Text fontSize="1xl" color={"#6E7191"} m={"10px 0 15px"} fontWeight={"extrabold"}>О компании</Text>
                    <Text fontSize='sm' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"10px 0 20px"}>Документы и реквизиты</Text>
                    <Text fontSize='sm' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Бренды</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Сотрудники</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Контакты</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Карьера</Text>
                </Box>
                <Box w={{base:"20%", xl:"15%"}} display={{base:"none", lg:"inline-block"}}>
                    <Text fontSize="1xl" color={"#6E7191"} m={"10px 0 15px"} fontWeight={"extrabold"}>Клиентам</Text>
                    <Text fontSize='sm' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"10px 0 20px"}>Новости</Text>
                    <Text fontSize='sm' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Как зарегестрироваться</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Как сделать заказ</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Способы оплаты</Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Гарантии возврата </Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Вопросы и ответы возврата </Text>
                    <Text fontSize='xs' className="hover__text" transition={"all 0.5s ease"} cursor={'pointer'} color={"#6E7191"} m={"0 0 20px"}>Доставка и склад </Text>
                </Box>
                <Box w={"15%"} display={{base:"none", xl:"inline-block"}}>
                    <Text fontSize="1xl" color={"#6E7191"} m={"10px 0 15px"} fontWeight={"extrabold"}>Сотрудничество</Text>
                </Box>
                <Box w={{base:"100%",lg:'25%' , xl:"25%"}}>
                    <Box display={"flex"} alignItems={"center"} mt={{base:"20px", lg:"0px"}} justifyContent={{base:"center", lg:"space-between"}} flexDirection={{base:"column-reverse", lg:'unset'}} borderBottom={{base:"none", lg:"2px solid #6E7191"}}>
                        <Text fontSize='xs' color={"#6E7191"} m={"0 0 20px"}>Ссылка на форму обратной связи со <br /> службой контроля качества</Text>
                        <Box display={"flex"} alignItems={"center"} opacity={"0.8"}>
                            <img className="Icon__telegram" src="https://static-00.iconduck.com/assets.00/telegram-icon-512x512-1s8w0tx0.png" width={"30px"} alt="" />
                            <img className="Icon__instagram M1" src="https://cdn-icons-png.flaticon.com/512/2175/2175198.png" width={"30px"} alt="" />
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={'center'} justifyContent={'center'}>
                        <Box display={{base:"none", lg:"inline-block"}}>
                            <Text fontSize="xs" textAlign={"center"} color={"#6E7191"} m={"10px 0 0px"} >Время работы</Text>
                            <Text fontSize="1xl" textAlign={"start"} color={"#6E7191"} m={"0 0 25px"} fontWeight={"extrabold"}>всегда с 7:00 до 23:00</Text>
                        </Box>
                        <Box display={{base:"none", lg:"inline-block"}}>
                            <Text fontSize="xs" textAlign={"center"} color={"#6E7191"} m={"10px 0 0px"} >Телефоны:</Text>
                            <Text fontSize="1xl" textAlign={"start"} color={"#6E7191"} m={"0 0 25px"} fontWeight={"extrabold"}> +998 (99) 202-78-06 <br /> +7 (495) 108-54-64</Text>
                        </Box>
                        <Box display={{base:"none", lg:"inline-block"}}>
                            <Text fontSize="xs" textAlign={"center"} color={"#6E7191"} m={"10px 0 0px"} >Адрес эл. почты</Text>
                            <Text fontSize="1xl" textAlign={"start"} color={"#6E7191"} m={"0 0 25px"} fontWeight={"extrabold"}>info@auto-e.ru</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
