import "./InsightsDropdown.css";

// IMAGE ICONS
import bulbIcon from "../public/deskIn.png";
import tickIcon from "../public/InsightsUtilities1.png";

// ICON
import { FiArrowUpRight } from "react-icons/fi";

export default function InsightsDropdown() {

  // ✅ JSON DATA
  const insightsData = {
    leftPanel: {
      title: "PRICE TRENDS",
      icon: bulbIcon
    },

    middlePanel: {
      title: "Most Appreciated Localities",
      items: [
        "Property Rates in Lakdikapul",
        "Property Rates in Kamalaprasad Nagar",
        "Property Rates in Panjagutta",
        "Property Rates in Ghatkesar",
        "Property Rates in Somajiguda",
        "Property Rates in Attapur",
        "Property Rates in Kavadiguda",
        "Property Rates in Narayanguda"
      ],
      viewAll: "View All Insights"
    },

    rightCard: {
      badge: "INTRODUCING",
      title: "Insights",
      bulbIcon: bulbIcon,
      tickIcon: tickIcon,
      points: [
        "Understand localities",
        "Read Resident Reviews",
        "Check Price Trends",
        "Tools, Utilities & more"
      ]
    }
  };

  return (
    <div className="insights-dropdown">

      {/* LEFT PANEL */}
      <div className="insights-left">
        
        <h4>{insightsData.leftPanel.title}</h4>
      </div>

      {/* MIDDLE PANEL */}
      <div className="insights-middle">
        <p className="middle-title">
          {insightsData.middlePanel.title}
        </p>

        {insightsData.middlePanel.items.map((item, i) => (
          <p key={i} className="middle-item">
            {item}
          </p>
        ))}

        <p className="view-all">
          {insightsData.middlePanel.viewAll}
        </p>
      </div>

      {/* RIGHT PANEL – INSIGHTS CARD */}
      <div className="insights-right">
        <div className="insights-box">

          {/* HEADER */}
          <div className="insights-header">
            <div className="insights-header-left">
              <img
                src={insightsData.rightCard.bulbIcon}
                alt="bulb"
                className="bulb-small"
              />
              <div>
                <small>{insightsData.rightCard.badge}</small>
                <h4>{insightsData.rightCard.title}</h4>
              </div>
            </div>

            <FiArrowUpRight className="arrow-icon" />
          </div>

          {/* POINTS */}
          {insightsData.rightCard.points.map((point, i) => (
            <div key={i} className="insight-row">
              <img
                src={insightsData.rightCard.tickIcon}
                alt="tick"
              />
              <span>{point}</span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

