import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
