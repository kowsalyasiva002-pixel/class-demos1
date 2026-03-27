import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaMicrophone,
  FaLocationArrow,
} from "react-icons/fa";
import { TABS } from "./tabsConfig";
import "./HeaderBanner.css";

const placeholders = [
  'Search "Hyderabad"',
  'Search "Bangalore"',
  'Search "Chennai"',
  'Search "Mumbai"',
];

export default function HeaderBannerWithSearch() {
  const [active, setActive] = useState("buy");
  const [index, setIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [searchText]);

  return (
    <div className="banner-wrapper">
      {/* ===== CAROUSEL ===== */}
      <Carousel
        fade
        indicators={false}
        prevIcon={<span className="custom-arrow"><FaChevronLeft /></span>}
        nextIcon={<span className="custom-arrow"><FaChevronRight /></span>}
      >
        <Carousel.Item>
          <img className="carousel-img" src="/1366-casagrand-pvf.webp" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src="/1366-candeur-crescent.webp" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src="/1366-asbl-landmark-new.webp" alt="" />
        </Carousel.Item>
      </Carousel>

      {/* ===== SEARCH OVERLAY ===== */}
      <div className="search-overlay">
        <div className="search-tabs-container">

          {/* Tabs */}
          <div className="tabs-row">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${active === tab.id ? "active" : ""} ${
                  tab.free ? "post-tab" : ""
                }`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
                {tab.dot && <span className="red-dot"></span>}
                {tab.free && <span className="free-badge">FREE</span>}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="search-row">
            <div className="dropdown">All Residential</div>

            <div className="search-input">
              <FaSearch />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={placeholders[index]}
              />
            </div>

            <div className="icon-btn"><FaLocationArrow /></div>
            <div className="icon-btn"><FaMicrophone /></div>

            <button className="search-btn">Search</button>
          </div>

        </div>
      </div>
    </div>
  );
}






















