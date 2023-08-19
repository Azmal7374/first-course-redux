
const {createStore, applyMiddleware} =require('redux')
const { default: logger } = require('redux-logger')

//products Constant
const GER_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'

 
//product state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberofProducts: 2,
}

 

//products action
const getProducts =() =>{
    return {
        type: GER_PRODUCTS,
    }
}

const addProduct =(product) =>{
    return {
        type: ADD_PRODUCTS,
        payload: product
    }
}

 


//product Reducer
const productReducer = (state = initialProductState, action) =>{
  switch (action.type){
    case GER_PRODUCTS:
        return {
            ...state, 
        }
    case ADD_PRODUCTS:
        return {
             products: [...state.products, action.payload],
            numberofProducts: state.numberofProducts + 1,
        }
    default:
      return  state
  }
}

 
 
// product store 
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() =>{
    console.log(store.getState());
})

 

//action dispatch update
store.dispatch(getProducts())
store.dispatch(addProduct('Mutton'))
 


 


