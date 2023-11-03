import { createContext, useState } from "react"; 

export const LoginContext = createContext({}) 
 
const LoginProvider = ({children}) => { 

    let [ Login, setLogin ] = useState([])

    return( 
        <LoginContext.Provider value={{Login, setLogin}}> 
            {children} 
        </LoginContext.Provider> 
    ) 
} 
export default LoginProvider
