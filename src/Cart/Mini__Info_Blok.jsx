import { Box, Text } from "@chakra-ui/react";

export default function Mini_info_Blok(props) {
    return(
        <Box display={"flex"} bg='white' m='1px' flexDirection={{base:"column",xl:"unset"}} borderRadius='10px' alignItems={"center"} p={"20px 10px"} justifyContent={"center"} h='110px' w={{base:"100%",md:"33.3%"}}>
            <Box w={{base:"100%",xl:"200px"}} m={"0 10px 0 0"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <img src={props.img} alt="" width="60px" />
            </Box>
            <Box display={{base:"flex",xl:'inline-block'}} lignItems={"center"} justifyContent={"center"} w={{base:"100%",xl:"700px"}}>
                <Text fontSize={"16px"} fontWeight='600' color="rgb(74, 131, 255)">{props.name}</Text>
                <Text display={{base:"none",xl:"inline-block"}} w={{base:"70%",md:'100%'}} fontSize={"1xs"} fontWeight='500' textAlign={{base:"center",md:"start"}} color="#8d8e99">{props.title}</Text>
            </Box>
        </Box>
    )
}
