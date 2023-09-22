import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Mini__box from "./Mini__box";
import Block__Cart from "./Block__Cart";
import CenterMode from "./Carusel";   

export default function Cart() {
    return(
        <Box p={{base:"0 15px",md:"0 50px",lg:"0 60px", xl:"0 100px"}} m={"10px 0 0"}>
        
            <CenterMode/>

            <Box mt={'30px'} display={{base:"none", "2xl":"block"}}>
                <Text fontSize={{base:"20px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight={"bold"} color={"gray.600"}>Популярные категории</Text>
                <Grid mt={"20px"} templateColumns={'repeat(9, 3fr)'} gap={{base:"15px", lg:"10px"}}>
                    <Mini__box title="Xbox" img={"https://api.logobank.uz/media/logos_png/Artel-01.png"}/>
                    <Mini__box title="Asus" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/asus-512.png"}/>
                    <Mini__box title="oppo" img={"https://cdn-icons-png.flaticon.com/512/882/882745.png"}/>
                    <Mini__box title="Iphone" img={"https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png"}/>
                    <Mini__box title="Redmi" img={"https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/xiaomi-512.png"}/>
                    <Mini__box title="Samsung" img={"https://cdn-icons-png.flaticon.com/512/5969/5969247.png"}/>
                    <Mini__box title="vivo" img={"https://cdn-icons-png.flaticon.com/512/882/882711.png"}/>
                    <Mini__box title="hp" img={"https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/HP.png"}/>
                    <Mini__box title="NVIDIA" img={"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/235_Nvidia_logo-512.png"}/>
                </Grid>
            </Box>

            <Box mt={'60px'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>Хиты продаж</Text>
                </Box>
                <Block__Cart/>
            </Box>

            <Flex minH={'150px'} mt={"60px"} mb={"60px"} overflow={"hidden"} alignItems={"center"} justifyContent={"center"} borderRadius={"20px"}>
                <img className="img__cart" src="https://bestware.com/media/wysiwyg/230823_XMG_XMG-PRO-16-Studio-M23_bestware_News-update_HEADER_DE_1.jpg"/>
            </Flex>
        </Box>
    )
}
