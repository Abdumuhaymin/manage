import React from "react";
import logo from "./img/logo.svg";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="container">
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__logo">
              <img src={logo} alt="logo" className="logo__img" />
            </a>
          </li>
          <li className="header__item">
            <nav className="header__nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Pricing
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Product
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    About Us
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Careers
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#" className="nav__link">
                    Community
                  </a>
                </li>
              </ul>
              <button className="nav__btn">Get Started</button>
            </nav>
          </li>
        </ul>
      </div>
    </>
  );
};
