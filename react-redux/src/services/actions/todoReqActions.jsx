import  axios  from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos'

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

// 
export const getAllTodos = () => async (dispatch) => {
    dispatch(getTodoReqActions())
    try {
        const res = await axios.get(url)
        console.log(res)
        dispatch(getTodoSuccessActions(res.data))
    } catch (error) {
        dispatch(getTodofailedActions(error.message))
    }
}