import React from "react"

export default function Header (){
    return(
        <header
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    padding: "0 30px",
    backgroundColor: "#1d4ed8", // Harare City Council blue
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
        backgroundColor: "#1e3a8a", // darker blue
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

  <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
    {["Home", "View city", "Apply Stand", "Contact us"].map((label, idx) => (
      <button
        key={idx}
        style={{
          all: "unset",
          cursor: "pointer",
          color: "white",
          fontWeight: 500,
          fontSize: "16px",
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
        onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
      >
        {label}
      </button>
    ))}
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
    )
}