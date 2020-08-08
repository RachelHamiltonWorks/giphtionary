import React from "react";

import logo from "../assets/logo.gif";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="500" />
    <h1 className="mb-4">Learning on Loop</h1>
  </div>
);

export default Hero;
