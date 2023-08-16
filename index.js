

//definig constant
const INCREMENT ='INCREMENT';
const DECREMENT ='DECREMENT';
const ADD_USER ='ADD_USER';

// state
const initialCounterState = {
    count : 0
}

const initialUsersState = {
    users: [{name: 'Tasmia'}]
}

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



// 1. state
// 2. dispatch action
// 3/ reducer (based on action type)