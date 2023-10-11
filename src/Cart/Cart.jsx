import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Mini__box from "./Mini__box";
import Block__Cart from "./Block__Cart";
import CenterMode from "./Carusel";   
import Loading from "./loading";
import Mini_info_Blok from "./Mini__Info_Blok";

export default function Cart() {
    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Box maxW='1300px' w='100%' p="5px 10px">
            
                <CenterMode />

                <Box mt={'30px'} display={{base:"none", xl:"block"}}>
                    <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>Популярные категории</Text>
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

                <Box mt={{base:'10px', xl:'40px'}}>
                    <Box display={'flex'} mb='15px' alignItems={'center'} justifyContent={'space-between'}>
                        <Text fontSize={{base:"16px", sm:"22px", lg:'26px', xl:"26px"}} fontWeight="medium" color={"gray.700"}>Хиты продаж</Text>
                    </Box>
                    <Block__Cart/>
                </Box>

                <Flex minH={'150px'} maxH='320px' mt={"60px"} mb={"60px"} overflow={"hidden"} alignItems={"center"} justifyContent={"center"} borderRadius={"20px"}>
                    <img className="img__cart" src="https://www.amd.com/system/files/2021-05/795377-amd-W6800-video-still-1920x600.jpg"/>
                </Flex>

                <Box w='100%' h='120px' mb='60px'>  
                    <Box position='absolute' left='0' p='0 170px' bg='rgb(89,49,244)' h='150px' display={"flex"} alignItems='center' flexDirection={{base:"column", md:"unset"}} maxW='100%'>
                        <Mini_info_Blok img="https://zapchasty.com.ua/i/deliver/1.png" title="У нас выгодные цены и доставка до дома" name="Больше не нужно ходить на базар"/> 
                        <Mini_info_Blok img="https://приваловнет.рф/wp-content/uploads/2022/07/%D0%91%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-42.png" title="Наш сервис удивит вас" name="Быстрая доставка"/> 
                        <Mini_info_Blok img="https://cdn-icons-png.flaticon.com/512/5064/5064889.png" title="Быстрое оформление и гарантия на возврат в случае неисправности" name="Удобства для вас" /> 
                    </Box>
                </Box>


                <Loading/>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.4272181652723!2d60.60504997660092!3d41.55999758527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc93b02466799%3A0xeaa23fff9be8f49d!2sDarital!5e0!3m2!1sru!2s!4v1696947102084!5m2!1sru!2s" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            </Box>
        </Box>
    )
}
