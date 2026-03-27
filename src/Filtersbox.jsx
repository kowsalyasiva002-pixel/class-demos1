import React, { useState } from "react";
import "./Filtersbox.css";
import data from "./fiiltersData.json";

export default function FiltersBox({ onSearch, onCancel }) {

  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedConstruction, setSelectedConstruction] = useState([]);
  const [selectedPostedBy, setSelectedPostedBy] = useState([]);

  const [budget, setBudget] = useState(100);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const clearSection = (setFunction) => {
    setFunction([]);
  };

  const clearAllFilters = () => {
    setSelectedTypes([]);
    setSelectedBedrooms([]);
    setSelectedConstruction([]);
    setSelectedPostedBy([]);
    setBudget(100);
  };

  const handleSearch = () => {
    const filters = {
      propertyTypes: selectedTypes,
      bedrooms: selectedBedrooms,
      construction: selectedConstruction,
      postedBy: selectedPostedBy,
      budget
    };

    if (onSearch) onSearch(filters);
    setOpenDropdown(null);
  };

  const cancelAll = () => {
    clearAllFilters();
    setOpenDropdown(null);
    if (onCancel) onCancel();
  };

  const getPillLabel = (key, selected, defaultLabel) => {

    if (key === "budget") {
      return budget === 100 ? "Budget" : `0 - ${budget} Cr`;
    }

    if (selected.length === 0) return defaultLabel;

    if (selected.length > 2) {
      return `${defaultLabel} (${selected.length})`;
    }

    return selected.join(", ");
  };

  const anyFilterSelected =
    selectedTypes.length ||
    selectedBedrooms.length ||
    selectedConstruction.length ||
    selectedPostedBy.length ||
    budget !== 100;

  return (
    <div className="filter-wrapper">

      {/* HEADER */}

      <div className="filters-top-row">
        <span className="filters-text">Filters</span>

        {anyFilterSelected && (
          <span className="clear-text" onClick={clearAllFilters}>
            Clear all filters
          </span>
        )}
      </div>


      {/* FILTER PILLS */}

      <div className="filter-header">

        <span
          className={`filter-pill ${openDropdown === "types" ? "active" : ""}`}
          onClick={() => toggleDropdown("types")}
        >
          {getPillLabel("types", selectedTypes, "Property Types")}
          <span className={`arrow-pill ${openDropdown === "types" ? "rotate" : ""}`} />
        </span>


        <span
          className={`filter-pill ${openDropdown === "budget" ? "active" : ""}`}
          onClick={() => toggleDropdown("budget")}
        >
          {getPillLabel("budget", [budget], "Budget")}
          <span className={`arrow-pill ${openDropdown === "budget" ? "rotate" : ""}`} />
        </span>


        <span
          className={`filter-pill ${openDropdown === "bedroom" ? "active" : ""}`}
          onClick={() => toggleDropdown("bedroom")}
        >
          {getPillLabel("bedroom", selectedBedrooms, "Bedroom")}
          <span className={`arrow-pill ${openDropdown === "bedroom" ? "rotate" : ""}`} />
        </span>


        <span
          className={`filter-pill ${openDropdown === "construction" ? "active" : ""}`}
          onClick={() => toggleDropdown("construction")}
        >
          {getPillLabel("construction", selectedConstruction, "Construction Status")}
          <span className={`arrow-pill ${openDropdown === "construction" ? "rotate" : ""}`} />
        </span>


        <span
          className={`filter-pill ${openDropdown === "postedBy" ? "active" : ""}`}
          onClick={() => toggleDropdown("postedBy")}
        >
          {getPillLabel("postedBy", selectedPostedBy, "Posted By")}
          <span className={`arrow-pill ${openDropdown === "postedBy" ? "rotate" : ""}`} />
        </span>

      </div>


      {/* DROPDOWN */}

      {openDropdown && (

        <div className="dropdown-container-f ">

          {/* PROPERTY TYPES */}

          {openDropdown === "types" && (
            <div className="section">

              <div className="section-header">
                <span>Property Types</span>

                {selectedTypes.length > 0 && (
                  <span
                    className="section-clear"
                    onClick={() => clearSection(setSelectedTypes)}
                  >
                    Clear All
                  </span>
                )}
              </div>

              {data.propertyTypes.map((item) => (
                <label key={item} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(item)}
                    onChange={() =>
                      toggleItem(item, selectedTypes, setSelectedTypes)
                    }
                  />
                  {item}
                </label>
              ))}

            </div>
          )}


          {/* BUDGET */}

          {openDropdown === "budget" && (
            <div className="section">

              <div className="section-header">
                <span>Budget</span>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="budget-slider"
              />

              <div className="budget-values">
                <span className="budget-min">0</span>
                <span className="budget-max">
                  {budget === 100 ? "100+ Cr" : `${budget} Cr`}
                </span>
              </div>

            </div>
          )}


          {/* BEDROOM */}

          {openDropdown === "bedroom" && (
            <div className="section">

              <div className="section-header">
                <span>Bedroom</span>

                {selectedBedrooms.length > 0 && (
                  <span
                    className="section-clear"
                    onClick={() => clearSection(setSelectedBedrooms)}
                  >
                    Clear All
                  </span>
                )}
              </div>

              {data.bedrooms.map((item) => (
                <button
                  key={item}
                  className={`tag ${selectedBedrooms.includes(item) ? "selected" : ""}`}
                  onClick={() =>
                    toggleItem(item, selectedBedrooms, setSelectedBedrooms)
                  }
                >
                  {item}
                </button>
              ))}

            </div>
          )}


          {/* CONSTRUCTION STATUS */}

          {openDropdown === "construction" && (
            <div className="section">

              <div className="section-header">
                <span>Construction Status</span>

                {selectedConstruction.length > 0 && (
                  <span
                    className="section-clear"
                    onClick={() => clearSection(setSelectedConstruction)}
                  >
                    Clear All
                  </span>
                )}
              </div>

              {data.constructionStatus.map((item) => (
                <button
                  key={item}
                  className={`tag ${selectedConstruction.includes(item) ? "selected" : ""}`}
                  onClick={() =>
                    toggleItem(item, selectedConstruction, setSelectedConstruction)
                  }
                >
                  {item}
                </button>
              ))}

            </div>
          )}


          {/* POSTED BY */}

          {openDropdown === "postedBy" && (
            <div className="section">

              <div className="section-header">
                <span>Posted By</span>

                {selectedPostedBy.length > 0 && (
                  <span
                    className="section-clear"
                    onClick={() => clearSection(setSelectedPostedBy)}
                  >
                    Clear All
                  </span>
                )}
              </div>

              {data.postedBy.map((item) => (
                <button
                  key={item}
                  className={`tag ${selectedPostedBy.includes(item) ? "selected" : ""}`}
                  onClick={() =>
                    toggleItem(item, selectedPostedBy, setSelectedPostedBy)
                  }
                >
                  {item}
                </button>
              ))}

            </div>
          )}

        </div>
      )}


      {/* FOOTER */}

      <div className="footer">
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>

        <button className="cancel-btn" onClick={cancelAll}>
          Cancel
        </button>
      </div>

    </div>
  );
}