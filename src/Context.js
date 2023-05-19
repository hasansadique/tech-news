import React, { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
}

const AppContext = createContext();
//to create a provider function
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchApiData = async (url) => {
        dispatch({
            type: "SET_LOADING"
        })
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }
    const removePost = (id) => {
        dispatch({
            type: "REMOVE_POST",
            payload: id
        })
    }
    const searchPost = (search) => {
        dispatch({
            type: "SEARCH_POST",
            payload: search
        })
    }
    const getPreviousPage = () => {
        dispatch({
            type: "PREV_PAGE",
        })
    }
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
        console.log(state.query)
    }, [state.query, state.page])
    return (
        <>
            <AppContext.Provider value={{ ...state, removePost, searchPost, getPreviousPage, getNextPage }}>
                {children}
            </AppContext.Provider>;
        </>
    )
}

///Creating Custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }