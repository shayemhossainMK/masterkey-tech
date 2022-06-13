import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import AdNetwork from "./pages/Services/AdNetwork/AdNetwork";
import AffiliateMarketing from "./pages/Services/AffiliateMarketing/AffiliateMarketing";
import BusinessManage from "./pages/Services/BusinessManage/BusinessManage";
import DigitalMarketing from "./pages/Services/DigitalMarketing/DigitalMarketing";
import Ecommerce from "./pages/Services/Ecommerce/Ecommerce";
import MobileApp from "./pages/Services/MobileApp/MobileApp";
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
        <Route path="/mobileapp" element={<MobileApp></MobileApp>}></Route>
        <Route path="/ecommerce" element={<Ecommerce></Ecommerce>}></Route>
        <Route
          path="/affiliate"
          element={<AffiliateMarketing></AffiliateMarketing>}
        ></Route>
        <Route path="/adnetwork" element={<AdNetwork></AdNetwork>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
