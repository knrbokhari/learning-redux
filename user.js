const { legacy_createStore } = require('redux')

// state 
const initialUsersState = {
    users: ['naeem'],
    totalUser: 1
}

// action - object - type, paylod
const addUserAction = (name) => {
    return {
        type: 'ADD_USER',
        payload: name
    }
}
const removeUserAction = (name) =>{
    return {
        type: 'REMOVE_USER',
        payload: name
    }
}

// reducer of counter
const usersReducer = (state = initialUsersState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                users: [...state.users, action.payload],
                totalUser: state.totalUser + 1
            }
        case 'REMOVE_USER':
            return {
                users: state.users.filter( i => i !== action.payload),
                totalUser: state.totalUser - 1
            }
        default:
           return state;
    }
}

// store - getState(), dispatch(), subscribe()
const store = legacy_createStore(usersReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(addUserAction('rayhan'));
store.dispatch(removeUserAction('naeem'));
store.dispatch(removeUserAction('naeem'));