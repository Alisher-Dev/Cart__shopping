import { createContext, useEffect, useState } from "react"; 
import LikeProvider from "./ContextLike";
import ProductProvider from "./ContextProduct";

export const StoreContext = createContext({}) 
 
const StoreProvider = ({children}) => { 

    let [ data, setData ] = useState([])

    useEffect(() => {
        // axios.get(``)
        // .then(apiResponse => {
        //   setData((apiResponse.data.products))
        // }) 
        setData([
            { id:2, img:"https://mediapark.uz/_next/image?url=https%3A%2F%2Fcdn.newmediapark.uz%2Fimages%2Faf23e988-a821-45fd-9146-94fd705fce35_test.jpg&w=640&q=75", Like:false, name:"Samsung", title:"Samsung 8/256 color:yellov size:7x8 battery:6000mah", price:"6 000 000" },
            { id:3, img:"https://mediapark.uz/_next/image?url=https%3A%2F%2Fcdn.newmediapark.uz%2Fimages%2F6ced2438-eb42-4204-8017-88f52cb75aad_test.jpg&w=640&q=75", Like:false, name:"Asus", title:"Asus intel core i5-10700F 16ram RTX 3050TI 1tb ssd", price:"10 000 000" },
            { id:4, img:"https://olcha.uz/image/600x600/products/2020-02-28/msi-8gb-geforce-rtx-2060-super-gamingx-ddr6-192bit-12386-0.jpeg", Like:false, name:"MSI", title:"MSI RTX 3050TI 8GB 256bit", price:"5 000 000" },
            { id:5, img:"https://techmartunbox.com/wp-content/uploads/2023/07/100-100000910wof-image-main-600x600-1.webp", Like:false, name:"amd", title:"amd ryzen 7 5800x 10x16", price:"7 500 000" },
        ])
    },[])


    return( 
        <StoreContext.Provider value={[ data, setData ]}>
            <LikeProvider>
                <ProductProvider>
                    {children} 
                </ProductProvider>
            </LikeProvider> 
        </StoreContext.Provider> 
    ) 
} 
export default StoreProvider
