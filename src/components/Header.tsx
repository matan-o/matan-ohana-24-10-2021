import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-links">
          <Link to="/">Main</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
