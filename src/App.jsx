import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import {
  About,
  Contact,
  Home,
  PageNotFound,
  Project,
  Service,
} from "./pages/index";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
