import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import ProjectCycle from "../Components/ProjectCycle";
import WhyUs from "../Components/WhyUs";
import Reviews from "../Components/Reviews";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <Services />
      <ProjectCycle
        id={"wind"}
        heading={"Project Cycle"}
        subHeading={
          " Committed to offering innovative and effective wind solutions."
        }
        paragraph={
          "Spectrum provides wind installation solutions for MSMEs, large industries, and communities to promote sustainability and energy independence using advanced technology to reduce carbon footprints and support a cleaner environment."
        }
        image={"/wind.webp"}
        imageAlt={"Wind Project Life Cycle"}
      />
      <ProjectCycle
        id={"solar"}
        heading={"Project Cycle"}
        subHeading={
          " Committed to offering innovative and effective solar solutions."
        }
        paragraph={
          "Spectrum facilitates solar installation services for various sectors to promote sustainability and energy independence. Our experienced team uses latest technology to reduce carbon footprint."
        }
        image={"/solar.webp"}
        imageAlt={"Solar Project Life Cycle"}
      />
      <WhyUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
