import React from "react";
import Advertisement from "../components/Advertisement";
import Header from "../components/Header";
import Main from "../components/Main";
import Navigation from "../components/Navigation";
import Subcontent from "../components/Subcontent";

const Home = () => {
  return (
    <div className="view-wrapper">
      <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main>
    </div>
  );
};

export default Home;
