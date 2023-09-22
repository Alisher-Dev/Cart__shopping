import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LikeContext } from "../Context/ContextLike";

export default function Like() {
    
    let [ Like, setLike ] = useContext(LikeContext)
    

    return(
        <Box p={{base:"10px 0px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} position={"relative"} minH="800px" height={"auto"} bg={"gray.100"}>
            <Box minH={"700px"}>
                <Box>
                    <Image m={'0 auto'} src="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-3d-cute-inbox-like-icon-png-image_6092506.png" h='320px' w='100%' objectFit={'contain'} alt="" />
                    <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"}>тут пока ничего нет</Text>
                    <Link to="/">
                        <Button display={'block'} variant='unstyled' p='0 15px' m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                    </Link>
                </Box>
                <Box>
                    <img src={Like.img} alt="" />
                </Box>
                
            </Box>
        </Box>
    )
}
