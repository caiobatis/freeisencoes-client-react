import { createStore, combineReducers } from "redux";
import rotateReducer from "./reducers/rotateReducer";
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  rotateReducer,
  form: formReducer,
})

const configureStore = () => createStore(rootReducer)

export default configureStore