const { legacy_createStore, combineReducers } = require("redux")

const initialProductState = {
    products: [],
    numberOfProducts: 0
}

const initialCartState = {
    carts: ['sugar'],
    numberOfProducts: 1
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

const addCart = (product) => {
    return {
        type: "ADD_CART",
        payload: product
    }
}

const getCart = () => {
    return {
        type: "GET_CART",
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

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case "GET_CART":
            return {
                ...state
            };
        case "ADD_CART":
            return {
                carts: [...state.carts, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

// root reducer
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

const store = legacy_createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(getProduct())
store.dispatch(addProduct('sugar'))
store.dispatch(getCart())
store.dispatch(addCart('pan'))