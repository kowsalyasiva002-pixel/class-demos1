import { FiArrowUpRight } from "react-icons/fi";
import "./InsightsCard.css";

export default function InsightsCard({
  badge,
  title,
  bulbIcon,
  tickIcon,
  points,
  width = "260px"   // optional custom width
}) {
  return (
    <div className="insights-right" style={{ width }}>
      <div className="insights-box">

        {/* HEADER */}
        <div className="insights-header">
          <div className="insights-header-left">
            <img
              src={bulbIcon}
              alt="bulb"
              className="bulb-small"
            />
            <div>
              <small>{badge}</small>
              <h4>{title}</h4>
            </div>
          </div>

          <FiArrowUpRight className="arrow-icon" />
        </div>

        {/* POINTS */}
        {points?.map((point, i) => (
          <div key={i} className="insight-row">
            <img src={tickIcon} alt="tick" />
            <span>{point}</span>
          </div>
        ))}

      </div>
    </div>
  );
}
