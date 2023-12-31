// state
// action -increment, decrement, reset
// reducer
// store

const {createStore} = require('redux');

//CONSTSNTS 
const INCREMENT = 'INCREMENT'
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE'
const DECREMENT = 'DECREMENT'
const  RESET = 'RESET'

const ADD_USER = 'ADD_USER'

//state
const initialState ={
    users: ['Azmal'],
    count : 0,
    // amount : 0,
}


//action -- akti object jeihnae duita property thekte pare.  payload jar maddome value recived kori
// const incrementCounterAction =() =>{
//     return{
//         type : INCREMENT,
//     };
// }

// const decrementCounterAction =() =>{
//      return { 
//         type: DECREMENT,
//     };
// }

// const resetCounterAction =() =>{
// return { 
//     type: RESET,
// };

// };

// const incrementCounterByValue = (value) =>{
//     return { 
//       type:INCREMENT_BY_VALUE,
//       payload : value
//     }
//   }
  


const addUser= (user) =>{
   return {
    type : ADD_USER,
    payload : user

   }
}



//Create Reducer 

// const counterReducer =(state=initialState , action) =>{
//     switch (action.type){
//         case INCREMENT:
//             return{
//                 ...state,
//                 count : state.count + 1
//             }
//         case DECREMENT:
//             return{
//                 ...state,
//                 count : state.count - 1
//             }  
//         case RESET:
//             return{
//                 ...state,
//                 count : 0,
//             } 
//         case INCREMENT_BY_VALUE:
//             return{
//                 ...state,
//                 count : state.count + action.payload
//             }     
//         default: 
//            state;
//     }

// }

const userReducer = (state = initialState, action) =>{
   switch(action.type){
    case ADD_USER:
        return {
            users: [...state.users, action.payload],
            count: state.count + 1,
        }

   }
}


//store
// const store = createStore(counterReducer)
const store = createStore(userReducer)

store.subscribe (() => {
    console.log(store.getState())
})

// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(decrementCounterAction())

// store.dispatch(resetCounterAction())
// store.dispatch(incrementCounterByValue(5))
// store.dispatch(incrementCounterByValue(15))

store.dispatch(addUser('Tasmia Mitu'))
store.dispatch(addUser(' Mitu'))