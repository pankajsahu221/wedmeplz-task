import React from "react";
import "../Styles/Megabox.css";

function Megabox({ showMega }) {
  return (
    <div>
      <div className={`mega__box ${showMega ? "show__mega" : ""}`}>
        <div className="content">
          <div className="row">
            <ul className="mega__links">
              <li>BRIDAL WEAR</li>
              <li>FAMILY WEAR</li>
              <li>GROOM WEAR</li>
              <li>JEWELLERY</li>
            </ul>
          </div>
          <div className="row">
            <ul className="mega__links">
              <li>HAIRSTYLE</li>
              <li>HENNA/MEHANDI</li>
              <li>MAKEUP</li>
              <li>JEWELLERY</li>
            </ul>
          </div>
          <div className="row">
            <ul className="mega__links">
              <li>BRIDAL WEAR</li>
              <li>FAMILY WEAR</li>
              <li>GROOM WEAR</li>
              <li>JEWELLERY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Megabox;
