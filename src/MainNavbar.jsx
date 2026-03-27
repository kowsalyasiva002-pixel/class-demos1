import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeadphones,
  FaUserCircle,
  FaBars,
  FaChevronRight
} from "react-icons/fa";

import MegaMenu from "./MegaMenus";
import TenantsMegaMenu from "./TenantsMegaMenu";
import OwnersMegaMenu from "./OwnersMegaMenu";
import DealersDropdown from "./ DealersDropdown";
import InsightsDropdown from "./InsightsDropdown";
import BuyDropdown from "./BuyDropdown";

import "./MainNavbar.css";

export default function MainNavbar() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const [showSupport, setShowSupport] = useState(false);
  const [showInternational, setShowInternational] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  /* ================= FUNCTIONS ================= */

  const toggleBuy = (e) => {
    e.stopPropagation();
    setActiveItem((prev) => (prev === "buy" ? null : "buy"));
  };

  const handleHover = (menu) => {
    setOpenMenu(menu);
    setActiveItem(menu);
  };

  const closeMenus = () => {
    setOpenMenu(null);
    setActiveItem(null);
  };

   

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = () => {
      setShowSupport(false);
      setShowInternational(false);
      setShowProfile(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* ================= UI ================= */

  return (
    <>
      <nav className="main-navbar">

        {/* LEFT */}
        <div className="navbar-left">
          <img
            src="/nnacres_white_v2.png"
            alt="Logo"
            className="navbar-logo"
            onClick={() => navigate("/")}
          />

          <div
            className={`buy-wrapper ${activeItem === "buy" ? "active" : ""}`}
            onClick={toggleBuy}
          >
            Buy in Hyderabad
            <span className="arrow">
              {activeItem === "buy" ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>

          {activeItem === "buy" && (
            <div className="buy-overlay" onClick={closeMenus}>
              <BuyDropdown />
            </div>
          )}
        </div>

        {/* CENTER */}
        <div className="nav-links">
          <span onMouseEnter={() => handleHover("buyers")}>For Buyers</span>
          <span onMouseEnter={() => handleHover("tenants")}>For Tenants</span>
          <span onMouseEnter={() => handleHover("owners")}>For Owners</span>
          <span onMouseEnter={() => handleHover("dealers")}>
            For Dealers / Builders
          </span>
          <span onMouseEnter={() => handleHover("insights")}>
            Insights <span className="new-badge">NEW</span>
          </span>
        </div>

        {/* RIGHT */}
        <div className="navbar-right">

          <button
            className="post-btn-navbar"
            onClick={() => navigate("/post-property")}
          >
            Post property <span className="nav-free-badge">FREE</span>
          </button>

         {/* SUPPORT */}

  <div
    className="icon-circle"
    onClick={(e) => {
      e.stopPropagation();
      setShowSupport(!showSupport);
      setShowInternational(false);
    }}
  >
    <FaHeadphones />
  </div>


          {/* PROFILE */}
          <div
            className="profile-wrapper"
            onClick={(e) => {
              e.stopPropagation();
              setShowProfile(!showProfile);
            }}
          >
            <FaUserCircle />

            {/* 🔴 RED DOT */}
            <span className="notification-dot"></span>

            <FaChevronDown />

          

      {/* MEGA MENU */}
      {openMenu && (
        <div className="mega-overlay" onMouseLeave={closeMenus}>
          {openMenu === "buyers" && <MegaMenu />}
          {openMenu === "tenants" && <TenantsMegaMenu />}
          {openMenu === "owners" && <OwnersMegaMenu />}
          {openMenu === "dealers" && <DealersDropdown />}
          {openMenu === "insights" && <InsightsDropdown />}
        </div>
      )}
    </>
  );
}