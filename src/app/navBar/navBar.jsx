import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/rental">
          Rental
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/statistic">
          Information
        </Link>
      </li>
    </ul>
  );
}
export default NavBar;
