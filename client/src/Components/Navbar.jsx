import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Link to="/" className="nav-link">Home</Link>
        </div>
      </div>
    </nav>
  );
}
