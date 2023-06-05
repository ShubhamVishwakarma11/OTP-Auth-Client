import {createContext, useReducer} from 'react';
import { EmailReducer } from '../reducers/EmailReducer';

export const EmailContext = createContext()

export const EmailContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(EmailReducer, {
        email: null
    });
    
    return (
        <EmailContext.Provider value={{...state, dispatch}}>
            {children}
        </EmailContext.Provider>
    )        
}