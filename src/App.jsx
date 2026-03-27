import { Routes, Route } from "react-router-dom";

import HomePage from "./Homepage";
import FlatsPage from "./FlatsPage";
import PostProperty from "./PostProperty";

function App() {
  return (
    <div>
      <Routes>
        {/* ✅ HOME PAGE */}
        <Route path="/" element={<HomePage />} />

        {/* ✅ FLATS PAGE ONLY */}
        <Route path="/buy/flats" element={<FlatsPage />} />

        {/* POST PROPERTY */}
        <Route path="/post-property" element={<PostProperty />} />

        {/* FALLBACK */}
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;