import React from "react";
import { Link } from "react-router-dom";
import "../Home/index.css"

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          <h2 >Add Empolyee</h2>
        </Link>
        <marquee direction="right"> <h3 className="h3"> Empolyee Mangement Application App</h3> </marquee>
      </nav>
    </div>
  );
};

export default Navbar;
