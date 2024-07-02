import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import RealEstateSection from "./components/realestatesection/RealEstateSection";
import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <RealEstateSection />
    </div>
  );
};

export default App;
