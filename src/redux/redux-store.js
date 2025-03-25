import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-reducer';
import toDoReducer from './todo-reducer';
import itemsReducer from './items-reducer';

const reducers = combineReducers({
    form: formReducer,
    todo: toDoReducer,
    items: itemsReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store;