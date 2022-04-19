import { combineReducers, createStore, applyMiddleware } from 'redux';
import { CounterReducer } from '../counter';
import thunk from 'redux-thunk';
import { ProfileReducer } from '../profile/profilereducer';

const appReducer = combineReducers({
    counter: CounterReducer,
    profile: ProfileReducer
})

const store = createStore(appReducer, applyMiddleware(thunk))

export { store };