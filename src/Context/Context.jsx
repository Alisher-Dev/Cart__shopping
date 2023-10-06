import { createContext, useEffect, useState } from "react"; 
import LikeProvider from "./ContextLike";
import ProductProvider from "./ContextProduct";
import axios from "axios";

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
            <LikeProvider>
                <ProductProvider>
                    {children} 
                </ProductProvider>
            </LikeProvider> 
        </StoreContext.Provider> 
    ) 
} 
export default StoreProvider
