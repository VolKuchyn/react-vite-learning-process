import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-reducer';
import toDoReducer from './todo-reducer';
import itemsReducer from './items-reducer';
import itemPageReducer from './itemPage-reducer';

const reducers = combineReducers({
    form: formReducer,
    todo: toDoReducer,
    items: itemsReducer,
    itemPage: itemPageReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store;