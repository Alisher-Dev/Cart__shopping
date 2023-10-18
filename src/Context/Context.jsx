import { createContext, useEffect, useState } from "react"; 
import ProductProvider from "./ContextProduct";
import axios from "axios";
import TodosProvider from "./ContextTodo";

export const StoreContext = createContext({}) 
 
const StoreProvider = ({children}) => { 

    let [ data, setData ] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
        .then(apiResponse => {
          setData((apiResponse.data.products))
        }) 
    },[])


    return( 
        <StoreContext.Provider value={[ data, setData ]}>
            <ProductProvider>
                <TodosProvider>
                    {children} 
                </TodosProvider>
            </ProductProvider>
        </StoreContext.Provider> 
    ) 
} 
export default StoreProvider
