import React, { createContext, useReducer } from "react";

// Create the context
export const GlobalContext = createContext();

// Initial state
const initialState = {
    isSidebarVisible: true,
    theme: "light",
    todos: [
        { id: 1, task: "Learn React Context", completed: false, important: false },
        { id: 2, task: "Build a To-Do App", completed: false, important: true },
        { id: 3, task: "Completed Task Example", completed: true, important: false },
        { id: 4, task: "Complete Assignment ", completed: true, important: false },
        { id: 5, task: "Update portfolio", completed: true, important: false },
        { id: 6, task: "Apply for an internship", completed: false, important: true },
        { id: 7, task: "Do a coding challenge", completed: false, important: false },
    ]
};

// Reducer function to handle state updates
const globalReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarVisible: !state.isSidebarVisible };
        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "ADD_TODO":
            return { ...state, todos: [...state.todos, action.payload] };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case "REMOVE_TODO":
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
};

// GlobalState provider
export const GlobalProvider = ({ children }) => {
    // useReducer hook takes in a reducer function and an initial state
    // and returns an array with the current state value and a dispatch function
    // to update the state
    // The dispatch function takes in an action object with a type and an optional payload
    // and passes it to the reducer function to update the state accordingly
    // The useReducer hook is used to manage global state in this application
    const [state, dispatch] = useReducer(globalReducer, initialState);
    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
