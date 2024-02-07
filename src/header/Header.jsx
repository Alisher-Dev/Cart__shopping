import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Logo from "../img/logo.png"
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import Katalog from "./katalog";

export default function Header() {

    const [categoryMenu, setCategoryMenu] = useState(false)
    
    return(
        <Box w='100%' display='flex' justifyContent='center' flexDirection='column' p='0 10px' boxShadow='0 5px 10px rgba(172, 152, 253, 0.150)'>

            <Box position='absolute' left='0' top='0' right='0'  p='0 10px' bg='rgba(174, 122, 252, 0.15)'>
                <Box maxW='1500px' w='100%' h='40px' m='0 auto' display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center' fontSize={{base: "11px", sm: "12px", md:'15px'}}>
                        <Text m='0 10px 0 0' p='0 10px 0 0' borderRight='0.2px solid rgba(102, 102, 102, 0.2)'>+998 (99) 202 78 06</Text>
                        <a href="http://youtube.com" target="blanck">Store location</a>
                    </Box>
                    <Box display='flex' alignItems='center' fontSize={{base: "11px", sm: "12px", md:'15px'}}>
                        <Text m='0 10px 0 0' p='0 10px 0 0' borderRight='0.2px solid rgba(102, 102, 102, 0.2)' cursor='pointer'>RUS</Text>
                        <a href="http://youtube.com" target="blanck">signup / login</a>
                    </Box>
                </Box>
            </Box>

            <Box w={"100%"} justifyContent={{base:"space-between",lg:'space-between'}} mt='40px' alignItems="center" display="flex" h='80px'>

                <Box display={{base:"flex", lg:"none"}} w='140px'>
                    <Button variant='unstyled' justifyContent='start'>
                        <HamburgerIcon fontSize={{base:"26px", sm:"30px", md:"38px"}} color="rgb(89,49,244)"/>
                    </Button>
                </Box>
            
                <Link to={"/"}>
                    <Box w='250px' display='flex' alignItems='center' justifyContent={{base:'center', lg: "start"}}>
                        <img className="Logo" src={Logo} alt="error" width='140px'/>
                    </Box>
                </Link>
            
                <Box display={{base:"flex", lg:"none"}} alignItems='center' w='140px' justifyContent="space-around">
                    <Box alignItems="center" display='flex' justifyContent="center" h="40px" w="40px"> 
                        <Search2Icon fontSize="25px" color="rgb(89,49,244)"/>
                    </Box>
                </Box>

                <Box cursor="pointer" h="50px" w="50%" overflow='hidden' position='relative' display={{base:"none",lg:"flex"}} boxShadow='5px 5px 5px rgba(172, 152, 253, 0.3)' alignItems='center' borderRadius="5px" justifyContent='center' bg="rgba(88, 49, 244, 0.05)">
                    <Input placeholder="search" overflow='hidden' border='none' h='100%' w='100%' p='0 55px 0 15px'/>
                    <Box bg='rgba(219, 210, 255, 0.7)' backdropFilter='blur(2px)' zIndex='2' h='100%' w='50px' display='flex' alignItems='center' justifyContent='center' position='absolute' right='0'>
                        <Search2Icon fontSize={"23px"} color='rgba(89,49,244,0.700)' />
                    </Box>
                </Box>

                <Flex display={{base:"none",lg:"flex"}} alignItems='center' w='250px' justifyContent="space-between">
                    <Link to="/shop">
                        <Button variant="unstyled" h={"55px"} minW={'70px'} maxW={'80px'} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                            <AiOutlineShoppingCart fontSize={"26px"} color="rgba(89,49,244,0.700)"/>
                            <Box alignItems='center' justifyContent='center' w='24px' h='24px' borderRadius='30px' bg='red' position='absolute' top='-2' right='-8px'>
                                <Text color='white' fontSize='16px' fontWeight='700'>0</Text>
                            </Box>
                        </Button>
                    </Link>
                    <Link to="/Like">
                        <Button variant="unstyled" h={"55px"} minW={'70px'} maxW={'80px'} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                            <AiOutlineHeart fontSize={"26px"} color='rgba(89,49,244,0.700)'/>
                        </Button>
                    </Link>
                    <Link to="/Cart">
                        <Button variant="unstyled" h="55px" minW='70px' maxW='80px' display="flex" alignItems="center" flexDirection="column">
                            <AiOutlineUser fontSize={"26px"} color='rgba(89,49,244,0.700)'/>
                        </Button>
                    </Link>
                </Flex>

            </Box>


            <Box w={{base:"100%", sm:"200px", lg:"220px", xl:"280px"}} justifyContent="space-between" position='relative' alignItems="center" display="flex">

                <Box display="flex" onClick={() => categoryMenu ? setCategoryMenu(false) : setCategoryMenu(true)} cursor='pointer' alignItems='center' justifyContent='center' w='100%' h={{base:"35px", sm:"40px", lg:"45px", xl:"60px"}} borderRadius='5px' bg='rgb(90,49,244)'>
                    <HamburgerIcon mr='5px' fontSize={{base:"15", sm:"16", md:"18px", lg:"20px", xl:"24px"}} color="rgb(255, 255, 255)"/>
                    <Text color='white' fontSize={{base:"12", sm:"12", md:"14px", lg:"16px", xl:"18px"}} fontWeight='400' >ALL CATEGORIES</Text>
                </Box>

                <Katalog activ={categoryMenu}/>
            </Box>


            {/* <Box display='flex' justifyContent="space-between" overflow='hidden' transition="all 0.5s ease" bg='white' h={categoryMenu ? "auto" : "0px"} w="100%" position="fixed" left='0' right='0' top={{base:"400px", lg:"180px"}} zIndex="10">
                <Katalog display="vertical"/>
            </Box> */}

            {/* <Box display={{base:"flex", lg:"none"}} w='100%' overflow='auto' position='relative' top='10px'>
                <Katalog display="garizontal"/>
            </Box> */}


        </Box>
    )
}

