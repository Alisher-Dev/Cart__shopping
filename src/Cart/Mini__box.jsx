import { GridItem, Text } from "@chakra-ui/react";


export default function Mini__box(props) {
    return(
        <GridItem className="bolk__MiNI__boxs" cursor={"pointer"} position={"relative"} w={'auto'} h={'auto'} p={{base:"10px",lg:'20px'}} display={"flex"} alignItems={"center"} justifyContent={"center"} borderRadius={"15px"} bg={"gray.200"} overflow={"hidden"} >
            <img className="img__Mini__boxs" src={props.img} />
        </GridItem>
    )
}
