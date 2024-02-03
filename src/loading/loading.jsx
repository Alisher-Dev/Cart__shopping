import { Box, Image, Spinner } from "@chakra-ui/react";
import Logo from "../img/logo.png"

function Loading() {
    return(
        <Box className="BgLiniaGradient" w='100vw' h='100vh' position='fixed' top='0' left='0' zIndex='10' display='flex' alignItems='center' justifyContent='center'>
            <Box className="menuWindow" display='flex'>
                <Spinner
                    thickness='3px'
                    speed='0.65s'
                    emptyColor='rgb(74, 29, 255)'
                    color='rgba(189, 174, 247, 0)'
                    size={{base:'lg', lg:'xl'}}
                />
                <Image src={Logo} alt='error' w={{base:'150px', md:'250px'}} h={{base:'40px', md:'60px'}} />
            </Box>
        </Box>
    )
}
export default Loading
