import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playOneMoreTime } from "../../../redux/quiz-refucer";
import s from './QuizResult.module.css'

const QuizRezult = () => {

    const dispatch = useDispatch();
    const quizGame = useSelector((state) => state.quiz);

    const oneMorePlay = () => {
        dispatch(playOneMoreTime());
    }

    return (
        <div className={s.resultCard}>
            <img className={s.congratzImg} src="https://cdn3d.iconscout.com/3d/premium/thumb/confetti-cone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--celebrate-celebration-party-pop-up-pack-miscellaneous-icons-6578423.png?f=webp" alt="" />
            <p>Ви відповіли правильно на {quizGame.result} з {quizGame.questions.length} питань</p>
            <button onClick={() => oneMorePlay()} className={s.oneMoreButton}>Play one more Time!</button>
        </div>
    )
}

export default QuizRezult;