// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// reducer
const todoReducer = (state = initialTodosState , action) => {
    switch (action.type) {
        case "GET_TODO_REQ":
            return {
                ...state,
                isLoading: true
            }
        case "GET_TODO_FAILED":
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case "GET_TODO_SUCCESS":
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            }
        default:
            return state;
    }
}

export default todoReducer