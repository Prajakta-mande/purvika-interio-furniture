import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";

import Home from "./component/home/Home";
import About from "./component/about/About";

import ModularOfficeFurniture from "./component/Commercial/ModularOfficeFurniture";
import Institutional from "./component/Commercial/Institutional";
import TurnkeySolution from "./component/Commercial/TurnkeySolution";
import Chair from "./component/Commercial/Chair";
import Sofa from "./component/Commercial/Sofa";

import Bedroom from "./component/Residential/Bedroom";
import LivingRoom from "./component/Residential/LivingRoom";
import KitchenTrolley from "./component/Residential/KitchenTrolley";

import Projects from "./component/Projects/Projects";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* COMMERCIAL */}
        <Route
          path="/commercial/modular-office-furniture"
          element={<ModularOfficeFurniture />}
        />
        <Route
          path="/commercial/institutional-office-furniture"
          element={<Institutional />}
        />
        <Route
          path="/commercial/turnkey-solution"
          element={<TurnkeySolution />}
        />
        <Route path="/commercial/sofa" element={<Sofa />} />
        <Route path="/commercial/chair" element={<Chair />} />

        {/* RESIDENTIAL */}
        <Route path="/residential/living-room" element={<LivingRoom />} />
        <Route path="/residential/bedroom" element={<Bedroom />} />
        <Route
          path="/residential/kitchen-trolley"
          element={<KitchenTrolley />}
        />

        {/* OTHER */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
