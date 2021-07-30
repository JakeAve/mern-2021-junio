import React from "react";
import Advertisement from "../components/Advertisement";
import Header from "../components/Header";
import Main from "../components/Main";
import Navigation from "../components/Navigation";

const Beta = () => {
  return (
    <div className="view-wrapper">
      <Header />
      <Navigation />
      <Main>
        <Advertisement />
        <Advertisement />
        <Advertisement />
      </Main>
    </div>
  );
};

export default Beta;
