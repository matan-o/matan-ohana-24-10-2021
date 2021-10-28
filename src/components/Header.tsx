import { faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { unitActions } from "../store/actions/unit.actions";
import { RootState } from "../store/reducers/root.reducer";

interface Props {
  unit: "F" | "C";
  dispatch: any;
}

const Header: React.FC<Props> = ({ unit, dispatch }) => {
  useEffect(() => {
  }, [unit]);

  

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-links">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> Main
          </Link>
          <Link to="/favorites">
            <FontAwesomeIcon icon={faHeart} /> Favorites
          </Link>
          <div className="unit">
            <span>Temp. unit</span>
            <button
              className={unit === "C" ? "selected" : ""}
              onClick={() => {
                dispatch(unitActions.unitToggled("C"));
              }}
            >
              C
            </button>
            <button
              className={unit === "F" ? "selected" : ""}
              onClick={() => {
                dispatch(unitActions.unitToggled("F"));
              }}
            >
              F
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateProps = (state: RootState) => {
  return {
    unit: state.unit.unit,
  };
};

export default connect(mapStateProps)(Header);
