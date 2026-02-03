import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function SocialLoginButtons() {
  const handleGoogleLogin = () => {
    // Redirect to Google login page (demo)
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleFacebookLogin = () => {
    // Redirect to Facebook login page (demo)
    window.location.href = "https://www.facebook.com/login/";
  };

  return (
    <div className="d-flex justify-content-center gap-3 mt-3">
      <button className="btn btn-danger d-flex align-items-center gap-2" onClick={handleGoogleLogin}>
        <FaGoogle /> Google
      </button>
      <button className="btn btn-primary d-flex align-items-center gap-2" style={{ backgroundColor: "#3b5998", borderColor: "#3b5998" }} onClick={handleFacebookLogin}>
        <FaFacebook /> Facebook
      </button>
    </div>
  );
}
