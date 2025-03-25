import React from "react";
import s from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className={s.header}>
            <NavLink className={s.navlink} to='/page1'>Form Page</NavLink>
            <NavLink className={s.navlink} to='/page2'>Show variables page</NavLink>
            <NavLink className={s.navlink} to='/todo'>To Do List</NavLink>
            <NavLink className={s.navlink} to='/items'>Items</NavLink>
        </div>

    )
}

export default Header;