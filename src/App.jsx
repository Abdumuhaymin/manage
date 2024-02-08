import React from "react";
import "./main.css";
import { MainLayout } from "./layout/main-layout";
import { Hero } from "./components/hero";
import { Different } from "./components/different";
import { Customers } from "./components/customers";
import { Start } from "./components/start";

function App() {
  console.log(<Hero />);
  return (
    <>
      <h1 hidden>MANAGE</h1>
      <MainLayout>
        <Hero />
        <Different />
        <Customers />
        <Start />
      </MainLayout>
    </>
  );
}

export default App;
