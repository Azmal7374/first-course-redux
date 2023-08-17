**Redux-ReduxToolkit**


**1. What is Redux & why Redux?**
   * A small JS Library
   * for managing medium/large amount of states globally in your app.
   * useContext + useReducer Hook ideas will help you to understand redux.

**2. Some common terms related to redux**
   * React-redux: redux is used with some common packages such as react-redux
   * redux-toolkit : recommended way to write redux logic for building redux app easily and avoiding mistakes.
   * redux devtools extension: helps to debug redux app easily.

**3. how redux works?**
   * define state.
   * dispatch an Action.
   * Reducer update state based on Action Type.
   * store will update the view
 
   ![Redux Architecture](https://user-images.githubusercontent.com/28184926/168863620-b2ffa708-8c0b-4b90-b81d-45212248b055.png)



**redux core concept**

**Steps**
   * 1. state
   * 2. dispatch action
   * 3. reducer (based on action type)
   * 4. store


  * State: consider what states you want to manage
  ```
// state
const initialCounterState = {
    count : 0
}

const initialUsersState = {
    users: [{name: 'Tasmia'}]
}

  ```

  * Action: actions are object that have 2 things- type & payload


  ```
  //definig constant
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const ADD_USER ='ADD_USER';


//action - object- type, payload

//INCREMENT COUNTER

const incrementCounter =() =>{
    return {
        type:INCREMENT,
    };
};



// incrementCounter()


//DECREMENT COUNTER

const decrementCounter =() =>{
    return {
        type:DECREMENT,
    };
};


const  addUser =() =>{
    return {
        type: ADD_USER,
        payload: {name:'Azmal Gazi'}
    };
};


  
  ```



```
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
```