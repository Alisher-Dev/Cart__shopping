import { Button, Text, useDisclosure } from "@chakra-ui/react"

function CategoryBtn(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return(
        <Button onClick={onClose} boxShadow='0 0 5px rgba(139, 139, 139, 0.5)' variant={'unstyled'} h={"50px"} w={"100%"} p={"2px 15px"} display={"flex"} alignItems={"center"} justifyContent={'start'} mb={'10px'}>
            <props.avatar color={props.color} fontSize={"26px"}/>
            <Text color={props.color} fontSize={"14px"} ml='5px'>{props.textBtn}</Text>
        </Button>
    )
}

export default CategoryBtn
