//definig constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};

// const initialUsersState = {
//     users: [{name: 'Tasmia'}]
// }

//action - object- type, payload

//INCREMENT COUNTER

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

// incrementCounter()

//DECREMENT COUNTER

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Azmal Gazi" },
  };
};

//Create reducer for counter
// Reducer = make to pure function
// sob logic hadnle korbe 
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

// 1. state
// 2. dispatch action
// 3. reducer (based on action type)
// 4. store
