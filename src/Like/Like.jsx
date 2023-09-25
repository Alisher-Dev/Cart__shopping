import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LikeContext } from "../Context/ContextLike";

export default function Like() {
    
    let [ todo, settodo ] = useState()
    let [ Id, setId ] = useState()
    let [ Like, setLike ] = useContext(LikeContext)
    Like.filter((el) => {
        return el.id
    })
    console.log(Like);

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px" position={"relative"} minH="800px" height={"auto"}>
                <Box minH={"700px"}>
                    <Box>
                        <Image m={'0 auto'} src="https://png.pngtree.com/png-vector/20220730/ourmid/pngtree-3d-cute-inbox-like-icon-png-image_6092506.png" h='320px' w='100%' objectFit={'contain'} alt="" />
                        <Text textAlign={"center"} fontSize={"2xl"} color={"rgb(89,49,244)"}>тут пока ничего нет</Text>
                        <Link to="/">
                            <Button display={'block'} variant='unstyled' p='0 15px' className="colorWhite" m={'10px auto 0'} bg='rgb(89,49,244)'>Главное страница</Button>
                        </Link>
                    </Box>
                    {
                        <Box>
                            <img src="" alt="" />
                        </Box>
                    }
                </Box>
            </Box>
        </Box>
    )
}
