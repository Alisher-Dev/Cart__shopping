import { createContext, useState } from "react"; 

export const LikeContext = createContext({}) 
 
const LikeProvider = ({children}) => { 

    let [ Like, setLike ] = useState([])

    return( 
        <LikeContext.Provider value={[ Like, setLike ]}> 
            {children} 
        </LikeContext.Provider> 
    ) 
} 
export default LikeProvider
