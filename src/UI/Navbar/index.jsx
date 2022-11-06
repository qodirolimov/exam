import React, { useRef } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const index = () => {
  const inputRef = useRef();

  return (
    <>
      <header>
        <div className="header__container">
          <nav className="nav">
            <div className="nav__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                className="bi bi-github nav__logo__svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>

            
              <input
                ref={inputRef}
                onChange={(e) => {
                  if (e.target === e.target) {
                    inputRef.current.style.backgroundColor = "white";
                    inputRef.current.style.width = "490px";
                    inputRef.current.style.transition = "all 1s ease";
                  }
                }}
                type="text"
                placeholder="Search or jump to..."
                className="nav__input"
              />
            

            <ul className="nav__ul__list">
              <li className="nav__ul__list__li__item">Pull requests</li>
              <li className="nav__ul__list__li__item">Issues</li>
              <li className="nav__ul__list__li__item">Marketplace</li>
              <li className="nav__ul__list__li__item">Explore</li>
            </ul>
          </nav>

          <div className="Section__first__wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-book Section__first__wrap__icon"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>

            <NavLink
              to="/overview"
              className="Section__first__wrap__text__first"
            >
              Overview
            </NavLink>
            <NavLink
              to="/repositories"
              className="Section__first__wrap__text__second"
            >
              Repositories
            </NavLink>
            <p className="Section__first__wrap__text__third">Projects</p>
            <p className="Section__first__wrap__text__fourth">Packages</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-star Section__first__wrap__icon__second"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <p className="Section__first__wrap__text__fifth">Stars</p>
          </div>

          <div className="line__first"></div>
        </div>
      </header>
    </>
  );
};

export default index;
