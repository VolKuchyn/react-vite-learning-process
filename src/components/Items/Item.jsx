import React from "react";
import s from './Item.module.css'

const Item = (props) => {
    return (
        <div>
            <div className={s.itemCard}>
                <img src={props.photo} alt="photo" className={s.itemPhoto} />
                <p className={s.title}>{props.title}</p>
            </div>



        </div>
    )
}

export default Item;