import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaBars, FaUserCircle, FaChevronDown } from "react-icons/fa";
import "./PostProperty.css";

// ASSETS
import step1Icon from "../public/download.png";
import step2Icon from "../public/download (1).png";
import step3Icon from "../public/download (2).png";

function PostProperty() {
  const [open, setOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [propertyType, setPropertyType] = useState("residential");
  const [purpose, setPurpose] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // ✅ FAQ STATE
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // ✅ FAQ DATA
  const faqData = [
    {
      question:
        "What type of property I can post on 99acres.com for selling/renting?",
      answer:
        "As an owner, agent, or builder, you can post all types of residential and commercial properties for rent, lease, or sale including flats, houses, plots, office spaces, shops, showrooms, and more.",
    },
    {
      question:
        "Is posting property for selling/renting on 99acres.com FREE?",
      answer:
        "Yes, you can post your property listing online for sale or rent for FREE. There are no charges involved.",
    },
    {
      question:
        "Can I sell/rent out my property on my own without paying brokerage?",
      answer:
        "Yes, you can sell or rent your property without involving any real estate agents.",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (!purpose) return alert("Please select purpose");
    if (!selectedType) return alert("Please select property type");

    console.log({
      ...data,
      purpose,
      propertyType,
      selectedType,
    });

    setShowRegister(true);
  };

  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <div className="custom-navbar">
        <img src="/nnacres_white_v2.png" className="logo" alt="logo" />

        <div className="nav-right">
          <div className="profile" onClick={() => setOpen(!open)}>
            <FaUserCircle size={24} />
            <FaChevronDown className={open ? "rotate" : ""} />
          </div>
          <FaBars size={22} />
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="hero-left">
          <h1 className="title">
            Sell or Rent Property <br />
            <span className="blue">online faster</span>
          </h1>

          <ul className="benefits">
            <li>Advertise for FREE</li>
            <li>Get unlimited enquiries</li>
            <li>Get shortlisted buyers</li>
          </ul>

          <img
            src="/Desktop_Animation_compress.gif"
            alt=""
            className="hero-img"
          />
        </div>

        {/* FORM */}
        <div className="form-card">
          <h3>Start posting your property, it's free</h3>

          <p className="label">You're looking to ...</p>
          <div className="chips">
            {["Sell", "Rent / Lease", "PG"].map((item) => (
              <button
                key={item}
                className={purpose === item ? "chip active" : "chip"}
                onClick={() => setPurpose(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <p className="label">And it's a ...</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={propertyType === "residential"}
                onChange={() => setPropertyType("residential")}
              />
              Residential
            </label>

            <label>
              <input
                type="radio"
                checked={propertyType === "commercial"}
                onChange={() => setPropertyType("commercial")}
              />
              Commercial
            </label>
          </div>

          <div className="chips">
            {[
              "Flat/Apartment",
              "Independent House / Villa",
              "Builder Floor",
              "1 RK / Studio Apartment",
            ].map((item) => (
              <button
                key={item}
                className={selectedType === item ? "chip active" : "chip"}
                onClick={() => setSelectedType(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="label">
              Your contact details for the buyer to reach you
            </p>

            <div className="phone-wrapper">
              <select className="country-code">
                <option>+91 IND</option>
              </select>

              <input
                type="text"
                placeholder="Enter phone number"
                className="phone-input"
                {...register("phone", {
                  required: "Phone required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter valid 10 digit number",
                  },
                })}
              />
            </div>

            {errors.phone && <p className="error">{errors.phone.message}</p>}

            <button className="start-btn">Start now</button>
          </form>
        </div>
      </div>

      {/* ================= STEPS ================= */}
      <div className="post-container">
        <h1 className="main-heading">
          Post Your Property in <br /> 3 Simple Steps
        </h1>

        <div className="steps-wrapper">
          <div className="step-card">
            <img src={step1Icon} alt="" />
            <h3>01. Add details</h3>
          </div>

          <div className="step-card">
            <img src={step2Icon} alt="" />
            <h3>02. Upload media</h3>
          </div>

          <div className="step-card">
            <img src={step3Icon} alt="" />
            <h3>03. Pricing</h3>
          </div>
        </div>
      </div>

      {/* ================= BANNER ================= */}
      <div className="banner-container">
        <div className="top-btn">
          <button>Begin to Post your Property</button>
        </div>

        <div className="image-section">
          <img src="/public/visBannercompress.acecbc0b.png" alt="" />

          <div className="overlay-card">
            <h2>
              With over 7 million unique visitors monthly, your property gets
              maximum visibility
            </h2>
          </div>
        </div>
      </div>

      {/* ================= FAQ ================= */}
<div className="faq-container">
  <h4 className="faq-subtitle">KNOW MORE ABOUT POSTING</h4>
  <h1 className="faq-title">Frequently Asked Questions</h1>

  {faqData.map((item, index) => (
    <div key={index} className="faq-item">
      <div
        className="faq-question"
        onClick={() => toggleFAQ(index)}
      >
        <span>{item.question}</span>

        {/* ✅ Chevron Icon */}
        <FaChevronDown
          className={`faq-icon ${
            activeFAQ === index ? "rotate" : ""
          }`}
        />
      </div>

      {/* ✅ Answer with animation */}
      <div
        className={`faq-answer ${
          activeFAQ === index ? "open" : ""
        }`}
      >
        {item.answer}
      </div>
    </div>
  ))}
</div>

      {/* ================= MODAL ================= */}
      {showRegister && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Login / Register</h3>
            <p>OTP will be sent to {watch("phone")}</p>

            <button onClick={() => alert("OTP Sent!")}>
              Continue
            </button>

            <span onClick={() => setShowRegister(false)}>✕</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostProperty;