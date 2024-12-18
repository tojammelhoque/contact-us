import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-5 bg-black text-white">
      <div className="logo">COMPANY LOGO</div>
      <div className="menu-item">
        <ul className="flex gap-3">
          <li
            href="#"
            className="hover:underline hover:text-blue-600 cursor-pointer"
          >
            Home
          </li>
          <li
            href="#"
            className="hover:underline hover:text-blue-600 cursor-pointer"
          >
            About
          </li>
          <li
            href="#"
            className="hover:underline hover:text-blue-600 cursor-pointer"
          >
            Privecy Policy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
