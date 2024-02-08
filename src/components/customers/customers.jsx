import React from "react";
import cust1 from "./img/cust1.png";
import cust2 from "./img/cust2.png";
import cust3 from "./img/cust3.png";
import "./customers.css";

export const Customers = () => {
  return (
    <>
      <section id="customers">
        <div className="container">
          <h2 className="customers__title">What they’ve said</h2>
          <ul className="customers__list">
            <li className="customers__item">
              <div className="customers__imgbox">
                <img src={cust1} alt="customer" className="customers__img" />
              </div>
              <h3 className="customers__name">Anisha Li</h3>
              <p className="customers__comment">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </li>
            <li className="customers__item">
              <div className="customers__imgbox">
                <img src={cust2} alt="customer" className="customers__img" />
              </div>
              <h3 className="customers__name">Ali Bravo</h3>
              <p className="customers__comment">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </li>
          </ul>
          <button className="nav__btn">Get Started</button>
        </div>
      </section>
    </>
  );
};
