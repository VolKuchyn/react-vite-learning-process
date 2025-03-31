import React from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './QuizCard.module.css'
import { setResult, getBack } from "../../../redux/quiz-refucer";

const QuizCard = () => {

    const dispatch = useDispatch();
    const quizGame = useSelector((state) => state.quiz);

    const questionObj = quizGame.questions[quizGame.progress];

    const gotoNextQuestion = (res) => {
        dispatch(setResult(res));
    }

    const goBack = () => {
        dispatch(getBack());
    }

    return (
        <div className={s.card}>
            <div className={s.question}>
                {questionObj.question}
            </div>

            <div className={s.answers}>
                {questionObj.answers.map((a, index) => (
                    <div className={s.answer} key={index} onClick={() => gotoNextQuestion(index)}>{a}</div>
                ))}
            </div>
            {quizGame.progress > 0 && (
                <button className={s.backButton} onClick={() => { goBack() }}>Go back</button>
            )}

        </div>
    );
}

export default QuizCard;