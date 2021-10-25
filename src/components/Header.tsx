import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-links">
          <Link to="/"><FontAwesomeIcon icon={faHome}/> Main</Link>
          <Link to="/favorites"><FontAwesomeIcon icon={faHeart}/> Favorites</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
