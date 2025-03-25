import React from "react";
import {  useSelector } from "react-redux";
import s from './Page2.module.css';



const Page2 = () => {

    const formData = useSelector((state) => state.form);

    return (
        <div>
            <div className={s.name}>
                Name: {formData.name}
            </div>
            <div className={s.email}>
                E-mail: {formData.email}
            </div>
            <div className={s.password}>
                Password: {formData.password}
            </div>
        </div>
    )
}

export default Page2;