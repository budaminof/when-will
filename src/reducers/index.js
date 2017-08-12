import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  login: loginReducer,
  // form: formReducer
});

export default rootReducer;
