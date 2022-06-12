import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import BusinessManage from "./pages/Services/BusinessManage/BusinessManage";
import DigitalMarketing from "./pages/Services/DigitalMarketing/DigitalMarketing";
import Ecommerce from "./pages/Services/Ecommerce/Ecommerce";
import Services from "./pages/Services/Services";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/businessmanage"
          element={<BusinessManage></BusinessManage>}
        ></Route>
        <Route
          path="/digitalmarketing"
          element={<DigitalMarketing></DigitalMarketing>}
        ></Route>
        <Route path="/ecommerce" element={<Ecommerce></Ecommerce>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
