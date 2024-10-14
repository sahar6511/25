import React from "react";
import Home from "../Home/Home";
import OnlineReservasion from "../OnlineReservasion/OnlineReservasion";
import Facilities from "../Facilities/Facilities";
import ContactUsMore from "../ContactUsMore/ContactUsMore";
import AboutUsMore from "../AboutUsMore/AboutUsMore";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/onlinereservation" element={<OnlineReservasion />}></Route>
        <Route path="/facilities" element={<Facilities />}></Route>
        <Route path="/aboutusmore" element={<AboutUsMore />}></Route>
        <Route path="/contactusmore" element={<ContactUsMore />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default Routing;
