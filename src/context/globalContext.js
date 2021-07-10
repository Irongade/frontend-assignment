import React, {createContext, useReducer, useContext} from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// reducer fn
const globalReducer = (state, action) => {
    switch(action.type) {
        case "OPEN_MODAL": {
            return {
                ...state,
                currentModalItem: action.payload.movie,
                showModal: action.payload.showModal
            }
        }
        case "CLOSE_MODAL": {
            return {
                ...state,
                showModal: action.payload.showModal
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

// provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentModalItem: {
            title: 'Army of the dead',
            release_date: 'May 13, 2021',
            overview: "Lorem ipsum...",
            vote_average: 8.1,
            vote_count: 0,
            poster_path: '/jTswp6KyDYKtvC52GbHagrZbGvD.jpg'
        },
        showModal: false
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

// custom hooks to use and dispatch state.
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

export const useGlobalStateContext = () => useContext(GlobalStateContext);
