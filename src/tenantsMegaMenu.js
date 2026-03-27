import { FiArrowUpRight } from "react-icons/fi";
import bulb from "../public/deskIn.png";
import tick from "../public/InsightsUtilities1.png";
import commercialImg from "../public/images.jpeg";

const tenantsData = {

  /* ================= ICONS ================= */
  icons: {
    arrow: FiArrowUpRight,
    bulb,
    tick
  },

  /* ================= LEFT MENU ================= */
  leftMenu: [
    { id: "buy", label: "RENT A HOME", defaultActive: true },
    { id: "land", label: "PG/CO-LIVING" },
    { id: "commercial", label: "COMMERCIAL" },
    { id: "popular", label: "POPULAR AREAS" },
    { id: "insights", label: "INSIGHTS", badge: "NEW" },
    { id: "articles", label: "ARTICLES & NEWS" }
  ],

  /* ================= LEFT FOOTER ================= */
  leftFooter: {
    text: "Contact us toll free on",
    phone: "1800 41 99099",
    timing: "(9AM – 11PM IST)"
  },

  /* ================= MIDDLE CONTENT ================= */
  middleContent: {

    buy: {
      title: "PROPERTIES IN HYDERABAD",
      items: [
        { label: "Flats", path: "/buy/flats" },
        { label: "Builder Floors", path: "/buy/floors" },
        { label: "Independent House", path: "/buy/independent-house" },
        { label: "Serviced Apartments", path: "/buy/serviced-apartments" },
        { label: "Studio Apartments / 1 RK Flats", path: "/buy/studio" },
        { label: "Farm Houses", path: "/buy/farm-house" }
      ]
    },

    land: {
      title: "PG COLLECTIONS",
      items: [
        { label: "Pg for girls in hyderabad", path: "/buy/plots/gated" },
        { label: "pg for boysin hyderabad", path: "/buy/plots/corner" },
        { label: "single room pg in hyderabad", path: "/buy/plots/east-facing" },
        { label: "Doubble sharing pg in hyderabad", path: "/buy/plots/freehold" }
      ]
    },

    commercial: {
      title: "COMMERCIAL PROPERTIES",
      items: [
        { label: "Ready to move office spaces", path: "/buy/commercial/office" },
        { label: "Bare shell office spaces", path: "/buy/commercial/it-park" },
        { label: "Co-working office spaces", path: "/buy/commercial/shops" },
        { label: "Warehouses", path: "/buy/commercial/warehouse" },
        { label: "Shops", path: "/buy/commercial/land" }
      ]
    },

    popular: {
      title: "POPULAR AREAS IN HYDERABAD",
      items: [
        { label: "Property in Kokapet", path: "/buy/kokapet" },
        { label: "Property in Narsingi", path: "/buy/narsingi" },
        { label: "Property in Kondapur", path: "/buy/kondapur" },
        { label: "Property in Tellapur", path: "/buy/tellapur" },
        { label: "Property in Bachupally", path: "/buy/bachupally" },
        { label: "Property in Puppalaguda", path: "/buy/puppalaguda" },
        { label: "Property in Miyapur", path: "/buy/miyapur" }
      ]
    },

    /* ✅ PROPER INSIGHTS SECTION */
    insights: {
      title: "INSIGHTS",
      items: [
        { label: "Hyderabad Overview", path: "/insights/overview" },
        { label: "Localities in Hyderabad", path: "/insights/localities" },
        { label: "Reviews of Hyderabad", path: "/insights/reviews" },
        { label: "Transaction Prices in Hyderabad", path: "/insights/prices" }
      ],
      viewAll: {
        label: "View All Insights",
        path: "/insights"
      }
    },

    /* ✅ NEW ARTICLES SECTION ADDED */
    articles: {
      title: "ARTICLES & NEWS",
      items: [
        { label: "Articles For TENANTS", path: "/articles/buyers" },
        { label: "Real Estate News", path: "/articles/news" },
        { label: "Buyer Guide", path: "/articles/guide" },
        { label: "Home Interior Guides", path: "/articles/interior" },
        { label: "Policies (GST, RERA, PMAY, Budget)", path: "/articles/policies" }
      ],
      viewAll: {
        label: "View All Articles",
        path: "/articles"
      }
    }

  },

  /* ================= RIGHT PANEL ================= */
  rightPanel: {

    buy: {
      popular: {
        title: "POPULAR SEARCHES",
        items: [
          { label: "Property in Hyderabad", path: "/buy/hyderabad" },
          { label: "Verified Property in Hyderabad", path: "/buy/verified" },
          { label: "New Projects in Hyderabad", path: "/buy/new-projects" },
          { label: "Ready to Move Flats", path: "/buy/ready-to-move" }
        ]
      }
    },

    commercial: {
      popular: {
        title: "POPULAR SEARCHES",
        items: [
          {
            label: "Verified Commercial property for sale in Hyderabad",
            path: "/buy/commercial/verified"
          },
          {
            label: "New Commercial Projects in Hyderabad",
            path: "/buy/commercial/new-projects"
          }
        ]
      },
      imagePanel: {
        image: commercialImg,
        buttonText: "Explore commercial buying",
        path: "/buy/commercial"
      }
    },

    insights: {
      intro: "INTRODUCING",
      heading: "Insights",
      points: [
        "Understand localities",
        "Read Resident Reviews",
        "Check Price Trends",
        "Tools, Utilities & more"
      ]
    }

  },

  /* ================= FOOTER ================= */
  footer: {
    email:
      "Email us at services@99acres.com or call us at 1800 41 99099 (IND Toll-Free)"
  }

};

export default tenantsData;