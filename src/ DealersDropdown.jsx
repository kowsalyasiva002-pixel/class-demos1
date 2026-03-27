import { useState } from "react";
import "./DealersDropdown.css";
import InsightsCard from "./InsightsCard";

import promoImg from "/hp_ppf_banner (1).png";
import bulbIcon from "../public/deskIn.png";
import tickIcon from "../public/InsightsUtilities1.png";

export default function DealersDropdown() {

  const menuData = {
    leftMenu: [
      { id: "offerings", label: "DEALER OFFERINGS" },
      { id: "research", label: "RESEARCH AND ADVICE" }
    ],

    centerMenu: {
      offerings: {
        title: "PROPERTY SERVICES",
        links: [
          "Post Property",
          "Dealer Services",
          "My99acres",
          "View Responses"
        ]
      },
      research: {
        title: "HELP",
        links: ["Customer Services & FAQs"]
      }
    },

    insights: {
      badge: "INTRODUCING",
      title: "Insights",
      icon: bulbIcon,
      points: [
        "Understand localities",
        "Read Resident Reviews",
        "Check Price Trends",
        "Tools, Utilities & more"
      ]
    },

    promoCard: {
      title: "Sell or rent faster at the right price!",
      subtitle: "List your property now for FREE",
      button: "Post Property",
      image: promoImg
    },

    footer: {
      builderText: "Are you a builder?",
      builderLink: "click here",
      support:
        "Email us at services@99acres.com or call us at 1800 41 99099 (IND Toll-Free)"
    }
  };

  const [activeMenu, setActiveMenu] = useState("offerings");
  const activeCenter = menuData.centerMenu[activeMenu];

  return (
    <>
      <div className="mega-overlay"></div>

      <div className="dealers-dropdown">

        {/* ================= LEFT ================= */}
        <div className="dealers-left">
          {menuData.leftMenu.map((item) => (
            <div
              key={item.id}
              className={`left-item ${
                activeMenu === item.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* ================= CENTER ================= */}
        <div className="owner-center">
          <h4>{activeCenter.title}</h4>

          {activeCenter.links.map((link, index) => (
            <div key={index} className="center-link">
              {link}
            </div>
          ))}
        </div>

        {/* ================= RIGHT PANEL ================= */}

        {/* OFFERINGS PROMO CARD */}
        {activeMenu === "offerings" && (
          <div className="owner-right">
            <h3>{menuData.promoCard.title}</h3>
            <p>{menuData.promoCard.subtitle}</p>

            <button className="dealers-post-btn">
              {menuData.promoCard.button}
            </button>

            <img
              src={menuData.promoCard.image}
              alt="Post Property"
              className="promo-image"
            />
          </div>
        )}

        {/* RESEARCH → INSIGHTS CARD (Reusable) */}
        {activeMenu === "research" && (
          <InsightsCard
            badge={menuData.insights.badge}
            title={menuData.insights.title}
            bulbIcon={menuData.insights.icon}
            tickIcon={tickIcon}
            points={menuData.insights.points}
            width="260px"
          />
        )}

        {/* ================= FOOTER ================= */}
        <div className="owner-footer">

          <div className="builder-link">
            {menuData.footer.builderText}{" "}
            <a href="#">
              {menuData.footer.builderLink}
            </a>
          </div>

          <div className="support-text">
            {menuData.footer.support}
          </div>

        </div>

      </div>
    </>
  );
}






