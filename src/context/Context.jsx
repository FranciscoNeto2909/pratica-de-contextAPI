import { createContext,useReducer } from "react"
import {initialState, userReducer} from "../reducer/Reducer"

 export const Context = createContext({
     initialState,
    dispatch:()=>{

    }})

 export function ContextProvider({children}) {
     const [state, dispatch] = useReducer(userReducer,initialState)
     return(
         <Context.Provider value={{state, dispatch}}>
             {children}
         </Context.Provider>
     )
 }