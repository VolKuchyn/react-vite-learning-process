import React from "react";
import s from './Item.module.css'
import { Link } from "react-router-dom";

const Item = (props) => {
    return (
        <div>
            <div className={s.itemCard}>
                <img src={props.photo} alt="photo" className={s.itemPhoto} />
                <Link to={`/product/${props.id}`} key={props.id} className={s.itemLink}>
                    <p className={s.title}>{props.title}</p>
                </Link>

            </div>



        </div>
    )
}

export default Item;