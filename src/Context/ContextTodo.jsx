import { createContext, useState } from "react"; 

export const TodoContext = createContext({}) 
 
const TodosProvider = ({children}) => { 

    let [ TodoList, setTodoList ] = useState([])

    return( 
        <TodoContext.Provider value={{ TodoList, setTodoList }}> 
            {children} 
        </TodoContext.Provider> 
    ) 
} 
export default TodosProvider
