import React, { useState, useEffect, useRef } from "react";

import logo from "./assets/HomeImages/images (1).jpeg";

export default function Header() {
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showSearchMenu, setShowSearchMenu] = useState(false);

  const searchInputRef = useRef(null);

  const ContactMenu = () => (
    <div
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        backgroundColor: "#ffffff",
        color: "#1e3a8a",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        minWidth: "150px",
      }}
    >
      <button style={menuButtonStyle}>Email</button>
      <button style={menuButtonStyle}>WhatsApp</button>
      <button style={menuButtonStyle}>Call</button>
    </div>
  );

  const menuButtonStyle = {
    all: "unset",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "6px",
    backgroundColor: "#e0f2fe",
    textAlign: "left",
    fontWeight: "500",
  };

  const SearchMenu = () => {
    const items = [
      "Find Available Stands",
      "Apply for a Stand",
      "Council Support",
      "FAQ & Help",
    ];

    return (
      <div
        style={{
          position: "absolute",
          top: "110%",
          left: 0,
          backgroundColor: "#ffffff",
          color: "#1e3a8a",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          maxWidth: "180px", // match input
        }}
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            style={{
              all: "unset",
              cursor: "pointer",
              padding: "6px 10px",
              borderRadius: "6px",
              backgroundColor: "#e0f2fe",
              fontSize: "13px",
              fontWeight: "500",
              whiteSpace: "normal",
              textAlign: "left",
            }}
            onClick={() => {
              setSearchText(item);
              setShowSearchMenu(false);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    if (searchText.trim() === "") {
      setShowSearchMenu(false);
    } else {
      setShowSearchMenu(true);
    }
  }, [searchText]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setShowSearchMenu(false);
        if (searchInputRef.current) {
          searchInputRef.current.blur();
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
        padding: "0 30px",
        backgroundColor: "#1d4ed8",
        color: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div>
      <button
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "6px 16px",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  }}
>
  <img src={logo} alt="Logo" style={{ height: 28, width: 28, borderRadius: "50%" }} />
  Stand Allocation
</button>

      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          position: "relative",
        }}
      >
        {["Home", "Available Stands", "Apply Stand"].map((label, idx) => (
          <button
            key={idx}
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            {label}
          </button>
        ))}

        {/* Contact Us Dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowContactMenu(true)}
          onMouseLeave={() => setShowContactMenu(false)}
        >
          <button style={buttonStyle}>Contact us</button>
          {showContactMenu && <ContactMenu />}
        </div>

        {/* Search with dropdown */}
        <div style={{ position: "relative" }}>
          <input
            ref={searchInputRef}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
            style={{
              padding: "8px 14px",
              borderRadius: "8px",
              border: "1px solid #bfdbfe",
              backgroundColor: "#f8fafc",
              color: "#1e293b",
              outline: "none",
              fontSize: "14px",
              height: "36px",
              width: "180px",
              boxSizing: "border-box",
            }}
          />
          {showSearchMenu && <SearchMenu />}
        </div>
      </div>
    </header>
  );
}

const buttonStyle = {
  all: "unset",
  cursor: "pointer",
  color: "white",
  fontWeight: 500,
  fontSize: "16px",
  position: "relative",
};
