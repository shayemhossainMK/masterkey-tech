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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PersonalBranding from "./pages/Services/PersonalBranding/PersonalBranding";
import BulkSms from "./pages/Services/BulkSms/BulkSms";
import HomeTwo from "./pages/Home2/HomeTwo";
import HomeThree from "./pages/Home3/HomeThree";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeTwo></HomeTwo>}></Route>
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
        <Route
          path="/personalbranding"
          element={<PersonalBranding></PersonalBranding>}
        ></Route>
        <Route path="/bulksms" element={<BulkSms></BulkSms>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
