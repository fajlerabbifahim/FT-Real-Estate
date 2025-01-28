import React from "react";
import Banner from "../Banner/Banner";
import PropertieSection from "../PropertieSection/PropertieSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import About from "../About/About";

function Home() {
  return (
    <div>
      <Banner />
      <PropertieSection />
      <WhyChooseUs />
      <About />
    </div>
  );
}

export default Home;
