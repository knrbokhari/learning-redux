// state 
const initialCounterState = {
    count: 0,
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECRENENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
           return state;
    }
}

export default counterReducer;