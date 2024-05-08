import { createContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import { init } from "../reducers/init";



export const AppContext = createContext()

export default function AppContextProvider(props){
    
    const [ state , dispatch ] = useReducer(reducer , init );

    return (
        <AppContext.Provider value={{ state,dispatch }}  >
            {props.children}
        </AppContext.Provider>
    )
}