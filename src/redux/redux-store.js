import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form-reducer';
import toDoReducer from './todo-reducer';
import itemsReducer from './items-reducer';
import itemPageReducer from './itemPage-reducer';
import quizReducer from './quiz-refucer'
import dndPageReducer from './dnd-reducer';

const reducers = combineReducers({
    form: formReducer,
    todo: toDoReducer,
    items: itemsReducer,
    itemPage: itemPageReducer,
    quiz: quizReducer,
    dnd: dndPageReducer,
})

const store = configureStore({
    reducer: reducers,
})

export default store;