import { Box, Text } from "@chakra-ui/react";

export default function Mini_info_Blok(props) {
    return(
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={{base:"column",md:"unset"}} bg='white' m={{base:"10px 0", md:'5px'}} borderRadius='10px' p={"20px 10px"} h='110px' w={{base:"97%",md:"30%"}}>
            <Box w={{base:"30%"}} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <img src={props.img} alt="error" width="60px" />
            </Box>
            <Box display={{base:"flex",md:'inline-block'}} lignItems={"center"} justifyContent={"center"} w={{base:"70%"}}>
                <Text fontSize={{base:"14px", xl:"16px"}} fontWeight='600' w={{base:"70%",md:'100%'}} textAlign={{base:"center",xl:"start"}} color="rgb(74, 131, 255)">{props.name}</Text>
                <Text display={{base:"none",xl:"inline-block"}} fontSize={"13px"} fontWeight='500' color="#8d8e99">{props.title}</Text>
            </Box>
        </Box>
    )
}
