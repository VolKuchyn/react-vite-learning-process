import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    result: 0,
    questions: [
        {
            question: "Яка столиця Франції?",
            answers: ["Мадрид", "Париж", "Рим"],
            correctAnswerIndex: 1
        },
        {
            question: "Скільки континентів на Землі?",
            answers: ["5", "6", "7"],
            correctAnswerIndex: 2
        },
        {
            question: "Який хімічний елемент має символ 'O'?",
            answers: ["Кисень", "Золото", "Олово"],
            correctAnswerIndex: 0
        },
        {
            question: "Хто написав «Кобзар»?",
            answers: ["Іван Франко", "Тарас Шевченко", "Леся Українка"],
            correctAnswerIndex: 1
        },
        {
            question: "Яка найбільша планета Сонячної системи?",
            answers: ["Земля", "Юпітер", "Сатурн"],
            correctAnswerIndex: 1
        },
        {
            question: "У якому році Україна здобула незалежність?",
            answers: ["1990", "1991", "1992"],
            correctAnswerIndex: 1
        },
        {
            question: "Скільки буде 9 × 7?",
            answers: ["63", "72", "56"],
            correctAnswerIndex: 0
        },
        {
            question: "Хто є автором роману «1984»?",
            answers: ["Джордж Орвелл", "Альбер Камю", "Рей Бредбері"],
            correctAnswerIndex: 0
        },
        {
            question: "Яка мова програмування використовується для створення веб-сторінок?",
            answers: ["Python", "HTML", "Java"],
            correctAnswerIndex: 1
        },
        {
            question: "Який океан найбільший на Землі?",
            answers: ["Атлантичний", "Індійський", "Тихий"],
            correctAnswerIndex: 2
        }],
    progress: 0,
    isPrevCorrect: [],


}

const quizReducer = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setResult: (state, action) => {
            if (action.payload === state.questions[state.progress].correctAnswerIndex) {
                state.result += 1;
                state.isPrevCorrect.push(true);
            } else {
                state.isPrevCorrect.push(false);
            }
            state.progress += 1;
        },
        playOneMoreTime: (state) => {
            state.progress = 0;
            state.result = 0;
        },
        getBack: (state) => {
            state.progress -= 1;
            if (state.isPrevCorrect[state.progress]) {
                state.result -= 1;
            }
            state.isPrevCorrect.pop();
        }
    }
});

export default quizReducer.reducer;
export const { setResult, playOneMoreTime, getBack } = quizReducer.actions;