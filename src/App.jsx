import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";

import ScrollToTop from "./components/common/ScrollToTop";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Stats from "./components/sections/Stats";
import Academics from "./components/sections/Academics";
import Sports from "./components/sections/Sports";
import Campus from "./components/sections/Campus";
import Testimonial from "./components/sections/Testimonial";
import Admissions from "./components/sections/Admissions";
import Contact from "./components/sections/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  return (
    <>
      <ScrollProgress />

      <CustomCursor />

      <button
        className="theme-toggle"
        onClick={() => setDarkMode((value) => !value)}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun size={18} />
        ) : (
          <Moon size={18} />
        )}
      </button>

      <Navbar />

      <main>
        <Hero />

        <About />

        <Stats />

        <Academics />

        <Sports />

        <Campus />

        <Testimonial />

        <Admissions />

        <Contact />
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;