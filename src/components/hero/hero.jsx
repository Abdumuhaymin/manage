import React from "react";
import heroImg from "./img/hero.png";
import "./hero.css";

export const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero__conten">
            <div className="hero__textbox">
              <h2 className="hero__title">
                Bring everyone together to build better products.
              </h2>
              <p className="hero__text">
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>
              <button className="nav__btn">Get Started</button>
            </div>
            <div className="hero__imgbox">
              <img className="hero__img" src={heroImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
