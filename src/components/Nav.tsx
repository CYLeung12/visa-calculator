import React, { FC } from "react";

const Nav: FC = () => {
  const logo = require("../images/logo.png");

  return (
    <nav className="bg-white w-full border-b border-gray-300 shadow">
      <div className="container mx-auto px-20 flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} className="h-8" alt="Logo" />
      </div>
    </nav>
  );
};

export default Nav;
