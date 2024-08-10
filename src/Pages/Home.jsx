import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import Services from "../Components/Services";
import WhyUs from "../Components/WhyUs";
import Reviews from "../Components/Reviews";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <Services />
      <WhyUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
