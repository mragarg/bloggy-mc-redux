import {
    ACTION_CREATE_POST
} from '../actions';

import { generateId } from '../utils';

// A reducer is a function 
// that accepts the current state
// and an action 
// then calculates/returns the next
// new version of state
export default function posts(state={}, action={type: ''}) {
    switch(action.type){
        case ACTION_CREATE_POST:
            // create a post!
            const id = generateId();
            console.log(`the new id is ${id}`);
            // console.log(`Sounds like you wanna create a post`);
            const newState = {
                ...state,
                // To use a variable as a key in an object literal, you must use brackets
                [id]: action.payload
            }
            // To get the equivalent result, you
            // can use the familiar assignment syntax:
            // newState[id] = action.payload;
            return newState;
            break;
        default:
            return state;
            break;
    }
}