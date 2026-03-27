import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaUserCircle, FaBars, FaSearch } from "react-icons/fa";

import FiltersBox from "./Filtersbox";
import LeftSidebar from "./LeftSidebar";

import micIcon from "../public/mic.png";
import locationIcon from "../public/nearMeV2.png";

import "./FlatsPage.css";

function FlatsPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("Buy");
  const [inputActive, setInputActive] = useState(false);
  const [locationTag, setLocationTag] = useState("Hyderabad");
  const [searchValue, setSearchValue] = useState("");

  const dropdownRef = useRef(null);
  const searchWrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }

      if (
        searchWrapperRef.current &&
        !searchWrapperRef.current.contains(event.target)
      ) {
        setInputActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelectedType(value);
    setShowDropdown(false);
  };

  const handleSearchClick = () => {
    setInputActive(true);
  };

  const handleSearchSubmit = (filtersFromBox) => {
    if (searchValue.trim()) {
      setLocationTag(searchValue);
    }

    setInputActive(false);

    console.log("Applied Filters:", filtersFromBox);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="custom-navbar">
        <div className="logo">99acres</div>

        <div
          ref={searchWrapperRef}
          className={`search-wrapper ${inputActive ? "expanded" : ""}`}
        >
          <div className="search-container">

            {/* BUY DROPDOWN */}
            <div className="buy-wrapper" ref={dropdownRef}>
              <div
                className="buy-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {selectedType}
                <FaChevronDown className={showDropdown ? "rotate" : ""} />
              </div>

              {showDropdown && (
                <div className="dropdown-menu">

                  <div className="dropdown-title">Residential</div>
                  {["Buy", "Rent", "PG", "Projects"].map((item) => (
                    <div
                      key={`res-${item}`}
                      className="dropdown-item"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </div>
                  ))}

                  <div className="dropdown-title">Commercial</div>
                  {["Buy", "Rent", "PG", "Projects"].map((item) => (
                    <div
                      key={`com-${item}`}
                      className="dropdown-item"
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </div>
                  ))}

                </div>
              )}
            </div>

            <div className="vertical-divider"></div>

            {/* SEARCH INPUT */}
            <div className="search-input-wrapper">

              {!inputActive ? (
                <div className="tags-container" onClick={handleSearchClick}>
                  <div className="location-tag">
                    {locationTag}
                    <span
                      className="remove-icon"
                      onClick={() => setLocationTag("")}
                    >
                      ✕
                    </span>
                  </div>

                  <div className="add-more-text">Add more</div>

                  <div className="default-icons">
                    <img src={micIcon} alt="mic" className="default-mic-icon" />
                    <FaSearch className="default-search-icon" />
                  </div>
                </div>
              ) : (
                <div className="input-active">
                  <input
                    className="search-input"
                    placeholder="Enter Locality / Project / Society / Landmark"
                    autoFocus
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />

                  <img
                    src={locationIcon}
                    alt="location"
                    className="right-location-icon"
                  />

                  <img src={micIcon} alt="mic" className="mic-icon-img" />

                  <FaSearch
                    className="search-icon"
                    onClick={() => handleSearchSubmit({})}
                  />
                </div>
              )}

            </div>
          </div>

          {inputActive && (
            <div className="search-expanded-panel">
              <FiltersBox
                onCancel={() => setInputActive(false)}
                onSearch={(filters) => handleSearchSubmit(filters)}
              />
            </div>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">
          <button className="post-btn">
            Post property
            <span className="free-badge">FREE</span>
          </button>

          <div className="user-icon-wrapper">
            <FaUserCircle size={22} />
            <div className="notification-dot"></div>
            <FaChevronDown />
          </div>

          <FaBars className="hamburger" />
        </div>
      </div>

      {/* PAGE BODY */}
      <div className="page-layout">

        <LeftSidebar />

        <div className="property-results">
          <h2>33816 results | Property in Hyderabad for Sale</h2>
        </div>

      </div>
    </>
  );
}

export default FlatsPage;