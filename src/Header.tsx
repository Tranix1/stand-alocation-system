import React, { useState } from "react";

export default function Header() {
  const [showContactMenu, setShowContactMenu] = useState(false);

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
            backgroundColor: "#1e3a8a",
            color: "white",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1e3a8a")}
        >
          Name
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

        {/* Contact Us with dropdown */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowContactMenu(true)}
          onMouseLeave={() => setShowContactMenu(false)}
        >
          <button style={buttonStyle}>Contact us</button>
          {showContactMenu && <ContactMenu />}
        </div>

        <input
          placeholder="Search..."
          style={{
            padding: "8px 14px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
            backgroundColor: "#f8fafc",
            color: "#1e293b",
            outline: "none",
            fontSize: "14px",
          }}
        />
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
