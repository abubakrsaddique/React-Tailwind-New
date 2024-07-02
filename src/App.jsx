import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import RealEstateSection from "./components/realestatesection/RealEstateSection";
import CardComponent from "./components/cardcomponent/CardComponent";
import MarqueeComponent from "./components/marqueecomponent/MarqueeComponent";
import About from "./components/about/About";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <RealEstateSection />
      <CardComponent />
      <MarqueeComponent />
      <About />
    </div>
  );
};

export default App;
