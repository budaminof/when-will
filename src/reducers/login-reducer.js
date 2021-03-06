import { LOGIN } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload };

        default:
            return state;
    }
};
