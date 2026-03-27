import promoImg from "../public/hp_ppf_banner.png";
import bulbIcon from "../public/deskIn.png";
import tickIcon from "../public/InsightsUtilities1.png";
import { FiArrowUpRight } from "react-icons/fi";

const ownersMegaMenu = {
  icons: {
    tick: tickIcon,
    arrow: FiArrowUpRight
  },

  leftNav: [
    {
      id: "offerings",
      label: "OWNER OFFERINGS",
      dynamicContent: {
        center: {
          title: "OWNER OFFERINGS",
          items: [
            { text: "Post Property", badge: "FREE" },
            { text: "Owner Services" },
            { text: "My99acres" },
            { text: "View Responses" }
          ]
        },
        right: {
          type: "promo",
          title: "Sell or rent faster at the right price!",
          subtitle: "List your property now for FREE",
          button: "Post Property",
          image: promoImg,
          bg: "#eaf7ef"
        }
      }
    },

    {
      id: "insights",
      label: "INSIGHTS",
      badge: "NEW",
      dynamicContent: {
        center: {
          title: "INSIGHTS",
          items: [
            { text: "Home Loan Tools & More" },
            { text: "Area Unit Converter" },
            { text: "Builders in India" },
            { text: "View All Insights" }
          ]
        },
        right: {
          type: "insights",
          icon: bulbIcon,
          insights: {
            title: "Introducing",
            heading: "Insights",
            points: [
              "Understand localities",
              "Read Resident Reviews",
              "Check Price Trends",
              "Tools, Utilities & more"
            ]
          },
          showArrow: true
        }
      }
    }
  ],

  footer: {
    phone: "1800 41 99099",
    timing: "9AM-11PM IST",
    email: "services@99acres.com"
  }
};

export default ownersMegaMenu;



