import React, { useEffect } from "react";
import Portfolio from "./components/Portfolio";
import "./styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animasi hanya sekali scroll
    });
  }, []);

  return <Portfolio />;
}

export default App;
