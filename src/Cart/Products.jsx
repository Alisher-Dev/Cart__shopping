import { Box } from "@chakra-ui/react"

function Products() {
    return(
        <>
        <Box p={{base:"10px 15px",md:"10px 50px",lg:"10px 60px", xl:"10px 100px"}} minH="800px" bg={"gray.100"} position='relative' display='flex' justifyContent='space-between'>
            <Box bg='white' w={'49%'}>
                <img src="" alt="img not faunt" width={'500px'}/>
            </Box>
            <Box w={'49%'} h='auto' bg='white'>

            </Box>
        </Box>
        </>
    )
}
export default Products
