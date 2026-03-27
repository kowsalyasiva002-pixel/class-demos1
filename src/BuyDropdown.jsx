import React, { useState } from "react";
import "./BuyDropdown.css";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";

const BuyDropdown = ({ selectedCity, setSelectedCity, activeTab, setActiveTab }) => {
  const [propertyType, setPropertyType] = useState("Residential");
  const [openDropdown, setOpenDropdown] = useState(false);

  const tabs = ["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living"];

  const cities = [
    "Hyderabad",
    "Western Mumbai",
    "Coimbatore",
    "Chennai",
    "Pune",
    "Delhi"
  ];

  return (
    <div className="dropdown-container">
      <h2 className="sentence">Explore real estate in...</h2>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="search-bar">

        {/* PROPERTY DROPDOWN */}
        <div className="type-dropdown" onClick={() => setOpenDropdown(!openDropdown)}>
          {propertyType} <FaChevronDown size={12} />

          {openDropdown && (
            <div className="dropdown-box">
              {["Residential", "Commercial"].map((item) => (
                <label key={item} className="radio-item">
                  <input
                    type="radio"
                    name="property"
                    checked={propertyType === item}
                    onChange={() => {
                      setPropertyType(item);
                      setOpenDropdown(false);
                    }}
                  />
                  {item}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* DIVIDER */}
        <div className="divider"></div>

        {/* INPUT */}
        <div className="input-box">
          <FaSearch className="search-icon" />
          <input placeholder="City Name" />
        </div>

        <button className="explore-btn">Explore</button>
      </div>

      {/* SUGGESTIONS */}
      <div className="suggestions">
        <p>Continue browsing where you left off...</p>

        <div className="chips">
          {cities.map((city) => (
            <span
              key={city}
              className={`chip ${selectedCity === city ? "active-chip" : ""}`}
              onClick={() => setSelectedCity(city)}
            >
              {activeTab} in {city}
            </span>
          ))}

          <div className="arrow">
            <FaChevronRight />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div>
          <span>All India</span>
          <span>Dubai</span>
          <span>For NRI</span>
          <span className="small">
            International
            <small>Powered by listglobally.com</small>
          </span>
        </div>

        <div className="right">
          View top cities <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default BuyDropdown;
 
