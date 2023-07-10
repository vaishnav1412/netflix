import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avathar"
        src="https://i.pinimg.com/originals/33/e4/07/33e407bc4b74d5d7d56eb4dc78c29164.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Nav;
