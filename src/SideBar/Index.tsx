import React from "react";

export default function SideBar() {
  return (
    <div style={sidebarStyle}>
      <div>
        <h3 style={sectionHeadingStyle}>⚙️ Other Council Services</h3>

        <a href="https://www.hararecity.co.zw" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          🌐 Main Website
        </a>
        <a href="#" style={linkStyle}>🚿 Water & Sewer</a>
        <a href="#" style={linkStyle}>🗑 Waste Collection</a>
        <a href="#" style={linkStyle}>🏠 Housing Department</a>
        <a href="#" style={linkStyle}>🚒 Fire & Ambulance</a>
        <a href="#" style={linkStyle}>📜 Building Permits</a>
        <a href="#" style={linkStyle}>📋 Licensing & By-Laws</a>
      </div>

      <div style={{ marginTop: '24px' }}>
        <hr style={dividerStyle} />
        <a href="#" style={linkStyle}>❓ Help & FAQs</a>
        <a href="#" style={linkStyle}>🔐 Login</a>
        <a href="#" style={linkStyle}>📝 Sign Up</a>
      </div>
    </div>
  );
}

// Adjusted Styles
const sidebarStyle = {
  width: '160px',
  height: 'calc(109vh - 40px)', // if header is 60px tall
//   marginTop: 1,
  backgroundColor: '#2c50b5', // lighter than #1e3a8a for flow
  color: '#ffffff',
  padding: '20px 16px',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Segoe UI, Roboto, sans-serif',
  boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
};

const sectionHeadingStyle = {
  fontSize: '15px',
  fontWeight: '600',
  marginBottom: '16px',
  borderBottom: '1px solid rgba(255,255,255,0.3)',
  paddingBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: '#ffffff'
};

const linkStyle = {
  display: 'block',
  color: '#e2e8f0',
  textDecoration: 'none',
  marginBottom: '12px',
  fontSize: '14px',
  fontWeight: '400',
  transition: 'all 0.2s',
  cursor: 'pointer'
};

const dividerStyle = {
  borderColor: 'rgba(255,255,255,0.2)',
  marginBottom: '14px'
};
