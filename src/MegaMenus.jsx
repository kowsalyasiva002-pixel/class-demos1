import { useState } from "react";
import { useNavigate } from "react-router-dom";
import buyersMegaMenuData from "./buyersMenuData";
import InsightsCard from "./InsightsCard";
import "./MegaMenus.css";

export default function MegaMenu() {
  const navigate = useNavigate();

  const {
    icons,
    leftMenu,
    leftFooter,
    middleContent,
    rightPanel,
    footer
  } = buyersMegaMenuData;

  const defaultActive =
    leftMenu.find((item) => item.defaultActive)?.id || leftMenu[0].id;

  const [activeMenu, setActiveMenu] = useState(defaultActive);

  const middleData = middleContent[activeMenu];
  const rightData = rightPanel[activeMenu];

  const handleNavigate = (path) => {
    if (path) navigate(path);
  };

  /* ===== CONDITIONS ===== */

  const isBuy = activeMenu === "buy";
  const isCommercial = activeMenu === "commercial";
  const isLand = activeMenu === "land";
  const isPopular = activeMenu === "popular";
  const isInsights = activeMenu === "insights";

  /* LAND + POPULAR should be 2 column layout */
  const twoColumn = isLand || isPopular;

  /* Show InsightsCard for everything except Commercial */
  const showInsightsCard = !isCommercial;

  return (
    <div className={`mega-container ${twoColumn ? "two-column" : ""}`}>

      {/* ================= LEFT PANEL ================= */}
      <div className="mega-left">
        <div className="left-top">
          {leftMenu.map((item) => (
            <div
              key={item.id}
              className={`left-link ${
                activeMenu === item.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveMenu(item.id)}
            >
              {item.label}
              {item.badge && (
                <span className="mega-badge">{item.badge}</span>
              )}
            </div>
          ))}
        </div>

        <div className="left-bottom">
          <p>{leftFooter.text}</p>
          <h4>{leftFooter.phone}</h4>
          <span>{leftFooter.timing}</span>
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="mega-right">

        {/* ===== COLUMN 1 (Middle Content) ===== */}
        <div className="mega-middle">
          <h6>{middleData?.title}</h6>

          {middleData?.items?.map((item, index) => (
            <p key={index} onClick={() => handleNavigate(item.path)}>
              {item.label}
            </p>
          ))}
        </div>

        {/* ===== BUY → POPULAR COLUMN ===== */}
        {isBuy && rightData?.popular && (
          <div className="mega-popular">
            <h6>{rightData.popular.title}</h6>
            {rightData.popular.items.map((item, index) => (
              <p key={index} onClick={() => handleNavigate(item.path)}>
                {item.label}
              </p>
            ))}
          </div>
        )}

        {/* ===== COMMERCIAL → POPULAR ===== */}
        {isCommercial && rightData?.popular && (
          <div className="mega-popular">
            <h6>{rightData.popular.title}</h6>
            {rightData.popular.items.map((item, index) => (
              <p key={index} onClick={() => handleNavigate(item.path)}>
                {item.label}
              </p>
            ))}
          </div>
        )}

        {/* ===== COMMERCIAL → IMAGE PANEL ===== */}
        {isCommercial && rightData?.imagePanel && (
          <div
            className="mega-commercial-image"
            onClick={() =>
              handleNavigate(rightData.imagePanel.path)
            }
          >
            <img
              src={rightData.imagePanel.image}
              alt="commercial"
            />
            <div className="commercial-overlay">
              {rightData.imagePanel.buttonText}
            </div>
          </div>
        )}

        {/* ===== INSIGHTS CARD (ALL EXCEPT COMMERCIAL) ===== */}
        {showInsightsCard && (
          <div className="mega-insights">
            <InsightsCard
              badge={rightPanel.insights.intro}
              title={rightPanel.insights.heading}
              bulbIcon={icons.bulb}
              tickIcon={icons.tick}
              points={rightPanel.insights.points}
            />
          </div>
        )}

        {/* ===== FOOTER ===== */}
        <div className="mega-footer">
          {footer.email}
        </div>

      </div>
    </div>
  );
}


















     
  
