import { createContext, useState } from "react"; 

export const ProductContext = createContext({}) 
 
const ProductProvider = ({children}) => { 

    let [ Product, setProduct ] = useState([])

    return( 
        <ProductContext.Provider value={[ Product, setProduct ]}> 
            {children} 
        </ProductContext.Provider> 
    ) 
} 
export default ProductProvider
