import React from "react";
import "./different.css";

export const Different = () => {
  return (
    <>
      <section id="different">
        <div className="container">
          <div className="diffrent__content">
            <div className="different__textbox">
              <h2 className="different__title">
                What’s different about Manage?
              </h2>
              <p className="different__text">
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
              </p>
            </div>
            <ul className="different__list">
              <li className="different__item">
                <span className="different__count">01</span>
                <div className="count__title">
                  <h3 className="different__sub">
                    Track company-wide progress
                  </h3>
                  <p className="different__cab">
                    See how your day-to-day tasks fit into the wider vision. Go
                    from tracking progress at the milestone level all the way
                    done to the smallest of details. Never lose sight of the
                    bigger picture again.
                  </p>
                </div>
              </li>
              <li className="different__item">
                <span className="different__count">02</span>
                <div className="count__title">
                  <h3 className="different__sub">Advanced built-in reports</h3>
                  <p className="different__cab">
                    Set internal delivery estimates and track progress toward
                    company goals. Our customisable dashboard helps you build
                    out the reports you need to keep key stakeholders informed.
                  </p>
                </div>
              </li>
              <li className="different__item">
                <span className="different__count">03</span>
                <div className="count__title">
                  <h3 className="different__sub">
                    Everything you need in one place
                  </h3>
                  <p className="different__cab">
                    Stop jumping from one service to another to communicate,
                    store files, track tasks and share documents. Manage offers
                    an all-in-one team productivity solution.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
