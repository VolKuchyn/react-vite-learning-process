import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-reducer';
import toDoReducer from './todo-reducer';
import itemsReducer from './items-reducer';
import itemPageReducer from './itemPage-reducer';
import quizReducer from './quiz-refucer'

const reducers = combineReducers({
    form: formReducer,
    todo: toDoReducer,
    items: itemsReducer,
    itemPage: itemPageReducer,
    quiz: quizReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store;