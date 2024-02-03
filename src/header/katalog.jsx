import { Box, Text } from "@chakra-ui/react"
import { useState } from "react";
import { FaBook, FaCarSide, FaPhotoVideo } from "react-icons/fa";
import { MdPhoneIphone, MdProductionQuantityLimits, MdSportsMartialArts } from "react-icons/md";
import { PiTelevisionSimpleFill, PiThermometerCold } from "react-icons/pi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { SiApplearcade, SiKofi } from "react-icons/si";
import { GiFurnace, GiHealthCapsule } from "react-icons/gi";
import { BiDish } from "react-icons/bi";

function Katalog(props) {
    let [category, setcategory] = useState('')
    return (
        <>
            <Box h={props.display === "garizontal" ? '20%' : '100%'} w={props.display === "garizontal" ? '100%' : '20%'} display={props.display === "garizontal" ? 'flex' : 'unset'}>
                <Box h='40px' onClick={() => setcategory("book")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "book" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <FaBook color={category === "book" ? "white" : "black"} />
                    <Text color={category === "book" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Книги</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("telefon")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "telefon" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <MdPhoneIphone color={category === "telefon" ? "white" : "black"} />
                    <Text color={category === "telefon" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Телефоны</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("eletro")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "eletro" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <PiTelevisionSimpleFill color={category === "eletro" ? "white" : "black"} />
                    <Text color={category === "eletro" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Бытовая техника</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("texnika")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "texnika" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <PiThermometerCold color={category === "texnika" ? "white" : "black"} />
                    <Text color={category === "texnika" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>техника</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("pcaksesuar")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "pcaksesuar" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <LuMonitorSmartphone color={category === "pcaksesuar" ? "white" : "black"} />
                    <Text color={category === "pcaksesuar" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Компьютеры</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("sport")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "sport" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <MdSportsMartialArts color={category === "sport" ? "white" : "black"} />
                    <Text color={category === "sport" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Спорт</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("ofise")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "ofise" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <SiKofi color={category === "ofise" ? "white" : "black"} />
                    <Text color={category === "ofise" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>дом и офис</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("video")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "video" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <FaPhotoVideo color={category === "video" ? "white" : "black"} />
                    <Text color={category === "video" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Телевизоры</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("gamer")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "gamer" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <SiApplearcade color={category === "gamer" ? "white" : "black"} />
                    <Text color={category === "gamer" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>для геймеров</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("mebel")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "mebel" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <GiFurnace color={category === "mebel" ? "white" : "black"} />
                    <Text color={category === "mebel" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Мебель</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("Dishes")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "Dishes" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <BiDish color={category === "Dishes" ? "white" : "black"} />
                    <Text color={category === "Dishes" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Посуда</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("health")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "health" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <GiHealthCapsule color={category === "health" ? "white" : "black"} />
                    <Text color={category === "health" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>здоровье</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("products")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "products" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <MdProductionQuantityLimits color={category === "products" ? "white" : "black"} />
                    <Text color={category === "products" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Детские товары</Text>
                </Box>
                <Box h='40px' onClick={() => setcategory("avto")} w='100%' transition='all 0.3s ease' _hover={{transform:'scale(99%)'}} _active={{transform:'scale(95%)'}} bg={category === "avto" ? 'rgba(89,49,244,0.700)' : 'rgba(241, 241, 241, 0.7)'} cursor='pointer' mb='15px' mr='10px' display='flex' alignItems='center' p='10px' borderRadius='5px'>
                    <FaCarSide color={category === "avto" ? "white" : "black"} />
                    <Text color={category === "avto" ? "white" : "black"} fontSize={{base:'12px', lg:'14px'}} ml='10px'>Автотовары</Text>
                </Box>
            </Box>
            <Box w='80%' h='100%'>

            </Box>
        </>
    )
}
export default Katalog
