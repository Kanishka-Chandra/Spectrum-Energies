import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Pages/Home";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: "500",
      once: true,
      easing: "ease-in-out",
      // other options
    });
  }, []);
  return <Home />;
}
