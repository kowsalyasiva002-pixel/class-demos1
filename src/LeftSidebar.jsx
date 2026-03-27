import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaInfoCircle } from "react-icons/fa";
import "./LeftSidebar.css";

/* JSON DATA */

const data = {
  min: [
    "No min","5 Lacs","10 Lacs","15 Lacs","20 Lacs","25 Lacs",
    "30 Lacs","40 Lacs","50 Lacs","60 Lacs","70 Lacs","80 Lacs",
    "90 Lacs","95 Lacs","1 Cr","1.2 Cr","1.5 Cr","2 Cr"
  ],

  max: [
    "5 Lacs","10 Lacs","15 Lacs","20 Lacs","25 Lacs",
    "30 Lacs","40 Lacs","50 Lacs","60 Lacs","70 Lacs",
    "80 Lacs","90 Lacs","95 Lacs","1 Cr","1.2 Cr",
    "1.5 Cr","2 Cr","No max"
  ]
};

export default function LeftSidebar() {

  const [showTooltip,setShowTooltip] = useState(false);
  const [budgetOpen,setBudgetOpen] = useState(true);

  const [minBudget,setMinBudget] = useState("No min");
  const [maxBudget,setMaxBudget] = useState("No max");

  const [minOpen,setMinOpen] = useState(false);
  const [maxOpen,setMaxOpen] = useState(false);

  const clearBudget = ()=>{
    setMinBudget("No min");
    setMaxBudget("No max");
  };

  const clearAll = ()=>{
    clearBudget();
  };

  const applied = minBudget !== "No min" || maxBudget !== "No max";

  const appliedText = () => {

    if(minBudget !== "No min" && maxBudget === "No max"){
      return `Starting from ₹ ${minBudget}`;
    }

    if(minBudget === "No min" && maxBudget !== "No max"){
      return `Up to ₹ ${maxBudget}`;
    }

    if(minBudget !== "No min" && maxBudget !== "No max"){
      return `₹ ${minBudget} - ₹ ${maxBudget}`;
    }

    return "";
  };

  return (

    <div>

      <div className="breadcrumb">Home</div>

      <div className="sidebar">

        {/* APPLIED FILTERS */}

        {applied && (

          <div className="appliedBox">

            <div className="appliedHeader">

              <span>Applied Filters</span>

              <span className="clearAll" onClick={clearAll}>
                Clear All
              </span>

            </div>

            <div className="filterTag">

              {appliedText()}

              <span className="closeTag" onClick={clearBudget}>
                ✕
              </span>

            </div>

          </div>

        )}

        {/* Hide already seen */}

        <div className="filterItem">

          <span>Hide already seen</span>

          <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
          </label>

        </div>

        {/* VERIFIED */}

        <div className="filterItem">

          <div className="verifiedRow">

            <span>Verified properties</span>

            <label className="switch">
              <input type="checkbox"/>
              <span className="slider"></span>
            </label>

          </div>

          <div className="verifiedTag">

            <span className="verifiedBadge">✔ Verified</span>

            <FaInfoCircle
              className="infoIcon"
              onClick={()=>setShowTooltip(!showTooltip)}
            />

            {showTooltip && (

              <div className="tooltip">

                99acres team visits the property site to verify posting details

              </div>

            )}

          </div>

        </div>

        {/* BUDGET */}

        <div className="budgetBox">

          <div
            className="sectionHeader"
            onClick={()=>setBudgetOpen(!budgetOpen)}
          >

            Budget

            <div className="budgetRight">

              {(minBudget !== "No min" || maxBudget !== "No max") && (

                <span
                  className="clearBtn"
                  onClick={(e)=>{
                    e.stopPropagation();
                    clearBudget();
                  }}
                >
                  Clear
                </span>

              )}

              {budgetOpen ? <FaChevronUp/> : <FaChevronDown/>}

            </div>

          </div>

          {budgetOpen && (

            <div className="budgetRow">

              {/* MIN */}

              <div className="dropdown">

                <div
                  className="dropdownBtn"
                  onClick={()=>setMinOpen(!minOpen)}
                >
                  {minBudget}
                  <FaChevronDown/>
                </div>

                {minOpen && (

                  <div className="dropdownMenu">

                    {data.min.map((item,index)=>(
                      <div
                        key={index}
                        className="dropdownItem"
                        onClick={()=>{
                          setMinBudget(item);
                          setMinOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                )}

              </div>

              {/* MAX */}

              <div className="dropdown">

                <div
                  className="dropdownBtn"
                  onClick={()=>setMaxOpen(!maxOpen)}
                >
                  {maxBudget}
                  <FaChevronDown/>
                </div>

                {maxOpen && (

                  <div className="dropdownMenu">

                    {data.max.map((item,index)=>(
                      <div
                        key={index}
                        className="dropdownItem"
                        onClick={()=>{
                          setMaxBudget(item);
                          setMaxOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}

                  </div>

                )}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>

  );
}