import React from "react";
import s from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className={s.header}>
            <Link className={s.navlink} to='/page1'>Form Page</Link>
            <Link className={s.navlink} to='/page2'>Show variables page</Link>
            <Link className={s.navlink} to='/todo'>To Do List</Link>
            <Link className={s.navlink} to='/items'>Items</Link>
            <Link className={s.navlink} to='/quiz'>Quiz</Link>
        </div>

    )
}

export default Header;