import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Index";
import Form from "./Form/Index";
import AvailableStands from "./AvailableStands/Index";
import SideBar from "./SideBar/Index";

function App() {
  return (
    <Router>
      <Header />
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/stands" element={<AvailableStands />} />
      </Routes>
    </Router>
  );
}

export default App;