import { createContext, useState } from "react"; 

export const ProductContext = createContext({}) 
 
const ProductProvider = ({children}) => { 

    let [ Product, setProduct ] = useState([])
    let [ Like, setLike ] = useState([])

    return( 
        <ProductContext.Provider value={{ Product, setProduct, Like, setLike }}> 
            {children} 
        </ProductContext.Provider> 
    ) 
} 
export default ProductProvider
