import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="closer">
          <header id="header">
            <Header />
          </header>
          <main>{children}</main>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
};
