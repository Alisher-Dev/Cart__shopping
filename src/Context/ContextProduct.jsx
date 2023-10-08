import { createContext, useState } from "react"; 
import TodosProvider from "./ContextTodo";

export const ProductContext = createContext({}) 
 
const ProductProvider = ({children}) => { 

    let [ Product, setProduct ] = useState([])

    return( 
        <ProductContext.Provider value={{ Product, setProduct }}> 
            <TodosProvider>
                {children} 
            </TodosProvider>
        </ProductContext.Provider> 
    ) 
} 
export default ProductProvider
