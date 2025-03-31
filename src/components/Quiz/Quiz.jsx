import React from "react";
import QuizCard from "./QuizCard/QuizCard";
import s from './Quiz.module.css'
import { useSelector } from "react-redux";
import QuizRezult from "./Result/QuizResult";

const Quiz = () => {


    const quizGame = useSelector((state) => state.quiz);


    return (
        <div className={s.quizGameWrapper}>


            <div className={s.quizGame}>

                <div className={s.progressBarWrapper}>
                <div className={s.progressBar} style={{ width: `${quizGame.progress * 10}%` }}></div>
                </div>

                {quizGame.progress < quizGame.questions.length ? <QuizCard /> : <QuizRezult />}

                

            </div>



        </div>
    )
}

export default Quiz;