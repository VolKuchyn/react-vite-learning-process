import React, { use } from "react";
import s from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {
    const [isSidebarOpened, setSidebarOpened] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpened(prev => !prev);
    };
  
    const closeSidebar = () => {
      setSidebarOpened(false);
    };
  
    return (
      <div>
        <div className={s.header}>
          <Link className={s.navlink} to="/page1">Form Page</Link>
          <Link className={s.navlink} to="/page2">Show Variables Page</Link>
          <Link className={s.navlink} to="/todo">To Do List</Link>
          <Link className={s.navlink} to="/items">Items</Link>
          <Link className={s.navlink} to="/quiz">Quiz</Link>
  
          <button className={s.openNavPanelBtn} onClick={toggleSidebar}>☰</button>
        </div>
  
        {isSidebarOpened && <div className={s.overlay} onClick={closeSidebar}></div>}
  
        <div className={`${s.sideNavPanel} ${isSidebarOpened ? s.open : ''}`}>
          <Link onClick={closeSidebar} className={s.navPanelLink} to="/page1">Form Page</Link>
          <Link onClick={closeSidebar} className={s.navPanelLink} to="/page2">Show Variables Page</Link>
          <Link onClick={closeSidebar} className={s.navPanelLink} to="/todo">To Do List</Link>
          <Link onClick={closeSidebar} className={s.navPanelLink} to="/items">Items</Link>
          <Link onClick={closeSidebar} className={s.navPanelLink} to="/quiz">Quiz</Link>
        </div>
      </div>
    );
  };
  
  export default Header;