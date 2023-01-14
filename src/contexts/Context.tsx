import { createContext } from 'react'

type ContextType = {
    name: string;
    age: number;
}

const initialState = {
    name: 'Herbert',
    age: 21
}

export const Context = createContext<ContextType>(initialState)

export const ContextProvider = ({ children }: any) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )
}