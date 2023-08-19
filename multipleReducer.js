
const {createStore, combineReducers} =require('redux')

//products Constant
const GER_PRODUCTS = 'GET_PRODUCTS'
const ADD_PRODUCTS = 'ADD_PRODUCTS'

//card Contant
const GET_CART_ITEMS = 'GET_CART_ITEMS'
const ADD_CART_ITEMS = 'ADD_CART_ITEMS'


//product state
const initialProductState = {
    products: ['sugar', 'salt'],
    numberofProducts: 2,
}

//cart state
const initialCartState = {
     cart: ['sugar'],
    numberofProducts: 1,
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

// cart action
const getCart =() =>{
    return {
        type:  GET_CART_ITEMS,
    }
}

const addCart =(product) =>{
    return {
        type: ADD_CART_ITEMS,
        payload: product,
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

//cart Reducer

const  cartReducer = (state = initialCartState, action) =>{
    switch (action.type){
      case  GET_CART_ITEMS:
          return {
              ...state,
              
          }
      case  ADD_CART_ITEMS:
          return {
               cart: [...state.cart, action.payload],
              numberofProducts: state.numberofProducts + 1,
          }
      default:
        return state
    }
  }


//combiner reducer

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

//product store 
// const store = createStore(productReducer);
// store.subscribe(() =>{
//     console.log(store.getState());
// })

//cart store 
const store = createStore(rootReducer);
store.subscribe(() =>{
        console.log(store.getState());
})


//dispatch update
store.dispatch(getProducts())
store.dispatch(addProduct('Mutton'))

store.dispatch( getCart())
store.dispatch(addCart('Pen'))


 


