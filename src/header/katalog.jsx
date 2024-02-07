import { Box, Text } from "@chakra-ui/react";


export default function Katalog(props) {
    return (
        <Box bg='white' h={props.activ ? "50vh" : "0px"} border='1px solid rgba(89,49,244,0.700)' borderRadius='4px' w="100%" position='absolute' top={{base:"35px", sm:"40px", lg:"45px", xl:"60px"}} zIndex='6' p={props.activ ? '5px 10px' : "0px"} transition='all 0.2s ease' overflow='auto' boxShadow='5px 5px 5px rgba(172, 152, 253, 0.3)'>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Electronics</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Xobbi uchun</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Maishiy texnika</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Kiyim kechak</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Suvinirlar</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Ovkatlar</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Krasovkalar</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Uy uchun</Text>
            <Text cursor='pointer' p='10px 0' fontWeight='600' fontSize={{base:"11px", md:'12px', lg:"14", xl:"16px"}}>Mashina uchun</Text>
        </Box>
    )
}
