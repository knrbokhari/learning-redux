const { legacy_createStore, applyMiddleware } = require("redux")
const { logger } = require("redux-logger")

const initialProductState = {
    products: [],
    numberOfProducts: 0
}

const addProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

const getProduct = () => {
    return {
        type: "GET_PRODUCTS",
    }
}


const productReducer = (state = initialProductState , action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state
            };
        case "ADD_PRODUCT":
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}


const store = legacy_createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(getProduct())
store.dispatch(addProduct('sugar'))