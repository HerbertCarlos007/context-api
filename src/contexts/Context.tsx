import { createContext, useReducer } from 'react'
import { UserType, userInitialState, userReducer } from '../reducers/userReducer' 
import { ThemeType, themeInitialState, themeReducer } from '../reducers/themeReducer'
import { reducerActionType } from '../types/reducerActionType'

type inititalStateType = {
    user: UserType,
    theme: ThemeType
}

type ContextType = {
    state: inititalStateType,
    dispatch: React.Dispatch<any>
}

const inititalState = {
    user: userInitialState,
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: inititalState,
    dispatch: () => null
})

const mainReducer = (state: inititalStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action),
    theme: themeReducer(state.theme, action)

})

export const ContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(mainReducer, inititalState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}