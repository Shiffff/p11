import React from "react";
import HomeContent from "../Components/HomeComponents/HomeContent";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="homePage">
      <Banner pic="./bgHome.svg" txt="Chez vous, partout et ailleurs" />
      <HomeContent />
    </div>
  );
};

export default Home;
