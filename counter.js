const {createStore, legacy_createStore} = require('redux')



// state 
const initialCounterState = {
    count: 0,
    user: 'hai'
}

const initialUsersState = {
    users: [{name: 'naeem'}]
}

// action - object - type, paylod
const incrementAction = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrementAction = () =>{
    return {
        type: 'DECRENENT'
    }
}
const addAction = () => {
    return {
        type: 'ADDUSER',
        payload: { name: 'rayhan' }
    }
}

// reducer of counter
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECRENENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
           return state;
    }
}

// store - getState(), dispatch(), subscribe()
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(incrementAction())

