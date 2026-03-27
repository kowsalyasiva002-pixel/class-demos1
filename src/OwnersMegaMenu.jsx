import { useState } from "react";
import ownersMegaMenu from "./ownersMegaMenu";
import "./OwnersMegaMenu.css";
import InsightsCard from "./InsightsCard";

export default function OwnersMegaMenu() {

  const [activeItem, setActiveItem] = useState(
    ownersMegaMenu.leftNav[0]
  );

  const content = activeItem.dynamicContent;

  return (
    <>
      {/* OVERLAY */}
      <div className="mega-overlay"></div>

      <div className="owner-mega-dropdown">

        {/* ================= LEFT PANEL ================= */}
        <div className="owner-left">
          {ownersMegaMenu.leftNav.map((item) => (
            <div
              key={item.id}
              className={`left-item ${
                activeItem.id === item.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveItem(item)}
            >
              {item.label}

              {item.badge && (
                <span className={`badge ${item.badge.toLowerCase()}`}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* ================= CENTER PANEL ================= */}
        <div className="owner-center">
          <h4>{content.center.title}</h4>

          {content.center.items.map((item, index) => (
            <div key={index} className="center-link">
              {item.text}

              {item.badge && (
                <span className={`owner-badge-1 ${item.badge.toLowerCase()}`}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* ================= RIGHT PANEL ================= */}

        {/* PROMO CARD */}
        {content.right.type === "promo" && (
          <div
            className="owner-right"
            style={{ background: content.right.bg }}
          >
            <h3>{content.right.title}</h3>
            <p>{content.right.subtitle}</p>

            <button className=" owner-post-btn">
              {content.right.button}
            </button>

            <img
              src={content.right.image}
              alt="Post Property"
            />
          </div>
        )}

        {/* INSIGHTS CARD (Reusable) */}
        {content.right.type === "insights" && (
          <InsightsCard
            badge={content.right.insights.title}
            title={content.right.insights.heading}
            bulbIcon={content.right.icon}
            tickIcon={ownersMegaMenu.icons.tick}
            points={content.right.insights.points}
            showArrow={content.right.showArrow}
            width="260px"
          />
        )}

        {/* ================= FOOTER ================= */}
        <div className="owner-footer">
          <div>
            contact us toll free on{" "}
            <strong>
              {ownersMegaMenu.footer.phone}
            </strong>{" "}
            ({ownersMegaMenu.footer.timing})
          </div>

          <div>
            Email us at{" "}
            <strong>{ownersMegaMenu.footer.email}</strong>
          </div>
        </div>

      </div>
    </>
  );
}









  


