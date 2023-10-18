import { Box, Button, Container, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Select, Text, useDisclosure } from "@chakra-ui/react";
import Logo from "../img/logo.png"
import { HamburgerIcon, CloseIcon, PhoneIcon, Search2Icon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineAppstore, AiOutlineUser } from "react-icons/ai";
import { ProductContext } from "../Context/ContextProduct";

export default function Header() {
    let [ Ktmenu, setKtmenu ] = useState(true)

    let [ScrolL, setScrolL] = useState(true)
    useEffect(() => {
        let handelScroll = () => {
            if (window.scrollY > 210) {
                setScrolL(true)
            }
            else{
                setScrolL(true)
            }
            setKtmenu(true)
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [])


    let { Product, setProduct } = useContext(ProductContext)
    
    let [Like, setLike] = useState(true);
    let [Shop, setShop] = useState(true);
    let [Glob, setGlob] = useState(true);
    let [TodoCart, setTodoCart] = useState(true);

    // let Time = new Date().toLocaleTimeString()

    let [leng__Kt, setleng__Kt] = useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('left')
    return(
        <Box h={{base:"70px",lg:"100px"}} w='100%' display='flex' justifyContent='center' boxShadow='0 5px 10px rgba(172, 152, 253, 0.150)'>
        <Flex flexDirection={"column"} className={ScrolL ? 'noscrolling' : 'scrolling'} transition={"all 0.4s ease"} zIndex={"10"} alignItems={"center"} justifyContent={"center"} h={{base:"70px",lg:"100px"}} maxW='1300px' w='100%' p="0 10px">
            <Box w={"100%"} justifyContent={{base:"space-between",lg:"start"}} alignItems={"center"} display={"flex"}>

            <Box display={{base:"flex", lg:"none"}} w='140px'>
                <Button onClick={onOpen} justifyContent='start'>
                    <HamburgerIcon fontSize={{base:"26px", sm:"30px", md:"38px"}} color={"rgb(89,49,244)"}/>
                </Button>
            </Box>

            <Drawer placement={placement} size={'full'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent className='burgerMn'>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <DrawerHeader color={"rgb(89,49,244)"} borderBottomWidth='1px'>Menu</DrawerHeader>
                        <Button display={'inline-block'} onClick={onClose} m={'0 20px 0 0'}>
                            <CloseIcon fontSize={"17px"} color={"rgb(89,49,244)"}/>
                        </Button>
                    </Box>
                <DrawerBody p={'0 5px'}>
                    <NavLink to="/" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"} }}>
                        <Button onClick={onClose} bg={'gray.100'} variant={'unstyled'} borderBottom={Glob ? '' : '2px solid green'} h={"50px"} w={"100%"} p={"2px 15px"} display={"flex"} alignItems={"center"} justifyContent={'start'} mb={'10px'}>
                            <AiOutlineAppstore fontSize={"26px"} color={Glob ? 'rgba(89,49,244,0.700)' : 'green'}/>
                            <Text fontSize={"14px"} ml='5px' color={Glob ? 'rgba(89,49,244,0.700)' : 'green'}>общие</Text>
                        </Button>
                    </NavLink>
                    
                    <NavLink to="/Like" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"} }}>
                        <Button onClick={onClose} bg={'gray.100'} variant={"unstyled"} borderBottom={Like ? '' : '2px solid red'} h={"50px"} w={"100%"} p={"2px 15px"} display={"flex"} alignItems={"center"} justifyContent={'start'} mb={'10px'}>
                            <AiOutlineHeart fontSize={"26px"} color={Like ? 'rgba(89,49,244,0.700)' : 'red'}/>
                            <Text fontSize={"14px"} ml='5px' color={Like ? 'rgba(89,49,244,0.700)' : 'red'}>Избранное</Text>
                        </Button>
                    </NavLink>

                    <NavLink to="/shop" style={({ isActive, isPending }) => {return { borderRadius: isActive ? '5px' : "5px"} }}>
                        <Button onClick={onClose} bg={'gray.100'} variant={"unstyled"} borderBottom={Shop ? '' : '2px solid rgba(30, 96, 218, 0.700)'} h={"50px"} w={"100%"} p={"2px 15px"} display={"flex"} alignItems={"center"} justifyContent={'start'} mb={'10px'}>
                            <AiOutlineShoppingCart fontSize={"26px"} color={Shop ? "rgba(89,49,244,0.700)" : "rgba(30, 96, 218, 0.700)"}/>
                            <Text fontSize={"14px"} ml='5px' color={Shop ? "rgba(89,49,244,0.700)" : "blue.500"}>Корзина</Text>
                        </Button>
                    </NavLink>
                </DrawerBody>
                </DrawerContent>
            </Drawer>

            
            <Link to={"/"}>
                <Box>
                    <img className="Logo" src={Logo} alt="" />
                </Box>
            </Link>
            <Box display={{base:"flex", lg:"none"}} alignItems='center' w='140px' justifyContent="space-around">
                <Box alignItems={"center"} display='flex' justifyContent={"center"} h={"40px"} w={"40px"} mr='5px'> 
                    <Search2Icon fontSize="25px" color={"rgb(89,49,244)"}/>
                </Box>
                <NavLink to="/Cart" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}}}>
                    <Button variant={"unstyled"} borderBottom={TodoCart ? '' : '2px solid green'} h="40px" w='40px' p="0" display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineUser fontSize={"27px"} color={TodoCart ? 'rgba(90,10,200,1)' : 'green'}/>
                    </Button>
                </NavLink>
            </Box>
            <Box onClick={() => {{Ktmenu ? setKtmenu(false) : setKtmenu(true); Ktmenu ? setleng__Kt(false) : setleng__Kt(true)}}} cursor={"pointer"} h={"50px"} w={{base:"70px","2xl":"150px"}} ml="20px" display={{base:"none",lg:"flex"}} alignItems={'center'} borderRadius={"5px"} justifyContent={'center'} bg={"rgb(89,49,244)"}>
                <HamburgerIcon className={Ktmenu ? "Burgerr" : ""} display={Ktmenu ? "flex" : "none"} color={"white"} boxSize={"40px"} p={"0 5px"}/>
                <CloseIcon className={Ktmenu ? "" : "Burgerr"} display={Ktmenu ? "none" : "flex"} color={"white"} boxSize={"40px"} p={"0 10px"} />
                <Text display={{base:"none","2xl":"flex"}} p={"0 0 0 10px"} fontSize={"18px"} lineHeight={"28px"} fontWeight={"600"} color={"white"}>Каталог</Text>
            </Box>
            <Box ml={"20px"} border={"1.5px solid rgb(89,49,244)"} overflow={"hidden"} display={{base:"none",lg:"flex"}} borderRadius={"10px"} w={{base:"55%", "2xl":"50%"}} h={"50px"} bg={"rgba(52, 104, 235, 0.150)"}>
                <Input className="InputSearch" h={"100%"} w={"90%"} p={"0 0 0 10px"} fontSize={"18px"} variant='unstyled' color={'rgb(65, 41, 163)'} placeholder='Я ищу'/>
                <Button variant={'ghost'} h={"100%"} w={"10%"}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"} w={"10%"}>
                        <Search2Icon fontSize={"25px"} color={"rgb(89,49,244)"}/>
                    </Box>
                </Button>
            </Box>


            <Flex display={{base:"none",lg:"flex"}} alignItems={'center'} ml={"20px"} justifyContent={"space-between"} w={"23%"}>
                <NavLink to="/shop" style={({ isActive, isPending }) => {return { borderRadius: isActive ? '5px' : "5px"}}}>
                    <Button variant={"solid"} border={"0.5px solid rgba(89,49,244,0.500)"} borderBottom={Shop ? '' : '2px solid rgba(30, 96, 218, 0.700)'} h={"55px"} minW={'70px'} maxW={'80px'} p={"0 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineShoppingCart fontSize={"26px"} color={Shop ? "rgba(89,49,244,0.700)" : "rgba(30, 96, 218, 0.900)"}/>
                        <Text fontSize={"14px"}  display={{lg:"none", xl:"block"}} color={Shop ? "rgba(89,49,244,0.700)" : "blue.500"}>корзина</Text>
                        <Box alignItems='center' display={Product.length ? "flex" : 'none'}  justifyContent='center' w='24px' h='24px' borderRadius='30px' bg='red' position='absolute' top='-2' right='-8px'>
                            <Text color='white' fontSize='16px' fontWeight='700'>{Product.length}</Text>
                        </Box>
                    </Button>
                </NavLink>
                <NavLink to="/Like" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}}}>
                    <Button variant={"solid"} border={"0.5px solid rgba(89,49,244,0.500)"} borderBottom={Like ? '' : '2px solid red'} h={"55px"} minW={'70px'} maxW={'80px'} p={"0 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineHeart fontSize={"26px"} color={Like ? 'rgba(89,49,244,0.700)' : 'red'}/>
                        <Text fontSize={"14px"}  display={{lg:"none", xl:"block"}} color={Like ? 'rgba(89,49,244,0.700)' : 'red'}>нравиться</Text>
                    </Button>
                </NavLink>
                <NavLink to="/Cart" style={({ isActive, isPending }) => { return { borderRadius: isActive ? '5px' : "5px"}}}>
                    <Button variant={"solid"} border={"0.5px solid rgba(89,49,244,0.500)"} borderBottom={TodoCart ? '' : '2px solid green'} h={"55px"} minW={'70px'} maxW={'80px'} p={"0 8px"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
                        <AiOutlineUser fontSize={"26px"} color={TodoCart ? 'rgba(89,49,244,0.700)' : 'green'}/>
                        <Text fontSize={"14px"} display={{lg:"none", xl:"block"}} color={TodoCart ? 'rgba(89,49,244,0.700)' : 'green'}>профиль</Text>
                    </Button>
                </NavLink>
            </Flex>
            </Box>
            <Box display={{base:"none", lg:"flex"}} p={Ktmenu ? "0" : {base:"10px 15px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} justifyContent={"space-between"} alignItems={"center"} h={Ktmenu ? "0px" : "92vh"} className="Ktmenu" transition={"all 0.3s 0.1s ease"} w={"100%"} position={"fixed"} top={{base:"90px", lg:"100px"}} zIndex={10}>
            </Box>
        </Flex>
        </Box>
    )
}
