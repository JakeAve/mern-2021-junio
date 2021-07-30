import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import Subcontent from "../components/Subcontent";

const Alpha = () => {
  return (
    <div className="view-wrapper">
      <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
      </Main>
    </div>
  );
};

export default Alpha;
