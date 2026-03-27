import HeaderBannerWithSearch from "./HeaderBanner";
import MainNavbar from "./MainNavbar";

function HomePage() {
  return (
    <div>
      {/* TOP NAVBAR */}
      <MainNavbar />

      {/* HERO BANNER + SEARCH */}
      <HeaderBannerWithSearch />

      {/* OPTIONAL: Add more home sections here */}
      <div style={{ padding: "20px" }}>
        <h2>Home Page Content</h2>
      </div>
    </div>
  );
}

export default HomePage;