const { default: axios } = require("axios")
const { legacy_createStore, applyMiddleware } = require("redux")
const { default: thunk } = require("redux-thunk")

// state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

// actions
const getTodoReqActions = () => {
    return {
        type: "GET_TODO_REQ"
    }
}

const getTodofailedActions = (data) => {
    return {
        type: "GET_TODO_FAILED",
        payload: data
    }
}

const getTodoSuccessActions = (data) => {
    return {
        type: "GET_TODO_SUCCESS",
        payload: data
    }
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
                ...state,
                isLoading: false,
                todos: action.payload
            }
        default:
            return state;
    }
}
// api url
const url = 'https://jsonplaceholder.typicode.com/todos/1'
// async action creator
const fetchData = () =>{
    return (dispatch) => {
        dispatch(getTodoReqActions())
        axios.get(url)
            .then(res => {
                dispatch(getTodoSuccessActions(res.data))
            })
            .catch(error => {
                dispatch(getTodofailedActions(error.message))
            })
    }
}

// store
const store = legacy_createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch
store.dispatch(fetchData())