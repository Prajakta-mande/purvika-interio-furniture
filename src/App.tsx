import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
//import Menu from "./component/Menu/Menu";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Header from "./component/Header/Header";
import Footer from "./component/footer/Footer";
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
      {/* <Menu /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Commercial/modular-office-furniture"
            element={<ModularOfficeFurniture />}
          />
          <Route
            path="/Commercial/Institutional-office-furniture"
            element={<Institutional />}
          />
          <Route
            path="/Commercial/Turnkey-Solution"
            element={<TurnkeySolution />}
          />
          <Route path="/Commercial/Sofa" element={<Sofa />} />
          <Route path="/Commercial/Chair" element={<Chair />} />

          <Route path="Residential/LivingRoom" element={<LivingRoom />} />
          <Route path="Residential/Bedroom" element={<Bedroom />} />
          <Route
            path="Residential/KitchenTrolley"
            element={<KitchenTrolley />}
          />
          <Route path="Projects/Projects" element={<Projects />} />
          <Route
            path="Residential/KitchenTrolley"
            element={<KitchenTrolley />}
          />
          <Route path="Contact/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
