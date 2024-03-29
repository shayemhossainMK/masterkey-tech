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
import { useEffect, useState } from "react";
import PersonalBranding from "./pages/Services/PersonalBranding/PersonalBranding";
import BulkSms from "./pages/Services/BulkSms/BulkSms";
import HomeTwo from "./pages/Home2/HomeTwo";
import AboutContainer from "./pages/AboutContainer/AboutContainer";
import ContactContainer from "./pages/ContactContainer/ContactContainer";
import HomeServices from "./pages/HomeService/HomeService";
import Loading from "./shared/Loading/Loading";
import Partners from "./pages/Partners/Partners";
import FooterTwo from "./shared/FooterTwo/FooterTwo";

function App() {
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 3500);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<HomeTwo></HomeTwo>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route
              path="/homeservices"
              element={<HomeServices></HomeServices>}
            ></Route>
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
            <Route path="/partners" element={<Partners></Partners>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/aboutcontainer"
              element={<AboutContainer></AboutContainer>}
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route
              path="/contactcontainer"
              element={<ContactContainer></ContactContainer>}
            ></Route>
          </Routes>
          <FooterTwo></FooterTwo>
        </>
      )}
    </div>
  );
}

export default App;
