import { LOGIN } from '../actions/types';

export default function (state = {}, action) {
  console.log("login reducer", action);
    switch (action.type) {
        case LOGIN:
            return {...state };

        default:
            return state;
    }
};
