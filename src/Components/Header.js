import React, { useState } from "react";
import "../Styles/Header.css";
// Material UI logos and components
import StorefrontIcon from "@material-ui/icons/Storefront";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";
import Megabox from "./Megabox";
// Importing Redux stuffs
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const [showMegaVendor, setShowVendor] = useState(false);
  const [showMegaWedding, setShowWedding] = useState(false);

  // Getting the boolean value, whether the user is logged in or not.
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  // Dispatch the type of change we need.
  const login = () => {
    dispatch({
      type: "LOG_IN"
    });
  };

  return (
    <div className="header__cont">
      <div className="header">
        <div>
          <label htmlFor="close-btn" className="toggle__btn">
            <ReorderIcon style={{ color: "white" }} />
          </label>

          <div className="header__logo">
            <img
              src="https://wedmeplz.com/wp-content/uploads/2020/04/Wedmeplz-4-e1586872272326.jpg"
              alt="logo"
            />
          </div>
        </div>

        {/* To toggle the sidebar */}
        <input
          type="radio"
          name="slide"
          id="menu-btn"
          style={{ display: "none" }}
        />
        <input
          type="radio"
          name="slide"
          id="close-btn"
          style={{ display: "none" }}
        />

        {/* All the Links components */}
        <ul className="header__icon__cont">
          <label htmlFor="menu-btn" className="close__btn">
            <CloseIcon style={{ color: "black" }} />
          </label>
          <li>
            <a href="#home" className="header__icon">
              <StorefrontIcon />
              <p onClick={e => setShowVendor(prevState => !prevState)}>
                Vendors
              </p>
            </a>

            {/* The megabox for the drop down */}
            <Megabox showMega={showMegaVendor} />
          </li>
          <li>
            <a href="#home" className="header__icon">
              <PhotoSizeSelectActualIcon />
              <p>Photos</p>
            </a>
          </li>
          <li>
            <a href="#home" className="header__icon">
              <StorefrontIcon />
              <p onClick={e => setShowWedding(prevState => !prevState)}>
                Weddings
              </p>
            </a>

            {/* The megabox for the drop down */}
            <Megabox showMega={showMegaWedding} />
          </li>
          <li>
            <a href="#home" className="header__icon">
              <LibraryBooksIcon />
              <p>Blog</p>
            </a>
          </li>
        </ul>

        {/* Search and Login form */}
        <div className="header__forms">
          <div>
            <form className="search__form">
              <button className="searchbtn">
                <SearchIcon />
              </button>
              <input placeholder="Search..." className="searchinp" />
            </form>
          </div>

          <span className="loginbtn">
            <Button
              onClick={login} //calling the `login` function to login/logout.
              style={{ fontSize: "12px", height: "36px", color: "#c7202f" }}
            >
              {isLogged ? "LOGOUT" : "LOGIN"}
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
