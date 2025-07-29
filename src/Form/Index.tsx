import React from "react";

export default function ApplicationForm() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Harare City Council Stand Application Form</h2>

      <input placeholder="Full Name" style={inputStyle} />

      <select style={inputStyle}>
        <option value="">Select Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input placeholder="ID Number" style={inputStyle} />
      <input type="date" placeholder="Date of Birth" style={inputStyle} />
      <input placeholder="Monthly Salary (USD)" style={inputStyle} />

      <label style={sectionLabel}>Marital Status</label>
      <div style={buttonGroupStyle}>
        {["Single", "Married", "Divorced", "Widowed"].map((status) => (
          <button key={status} style={buttonStyle}>{status}</button>
        ))}
      </div>

      <input placeholder="Spouse First Name" style={inputStyle} />
      <input placeholder="Spouse Surname" style={inputStyle} />
      <input placeholder="Spouse ID" style={inputStyle} />
      <input placeholder="Spouse Monthly Salary" style={inputStyle} />

      <label style={sectionLabel}>Current Address</label>
      <textarea placeholder="Current Address" style={textareaStyle}></textarea>

      <label style={sectionLabel}>Tenure Status</label>
      <div style={buttonGroupStyle}>
        {["Lodger", "Boarder", "Tenant", "Tied Tenant"].map((type) => (
          <button key={type} style={buttonStyle}>{type}</button>
        ))}
      </div>

      <label style={sectionLabel}>Type of Accommodation Sought</label>
      <select style={inputStyle}>
        <option value="">Select Type</option>
        <option>Rented House/Flat</option>
        <option>High Density Stand</option>
        <option>Medium Density Stand</option>
        <option>Low Density Stand</option>
      </select>

      <label style={sectionLabel}>Employment Details</label>
      <div style={buttonGroupStyle}>
        {["City of Harare", "Civil Servant", "Other"].map((emp) => (
          <button key={emp} style={buttonStyle}>{emp}</button>
        ))}
      </div>
      <input placeholder="Employer Name" style={inputStyle} />
      <textarea placeholder="Employer Address" style={textareaStyle}></textarea>
      <input placeholder="Contact Phone/Cell" style={inputStyle} />
      <input placeholder="Staff No." style={inputStyle} />
      <input placeholder="Nature of Work" style={inputStyle} />
      <input type="date" placeholder="Date" style={inputStyle} />
      <input placeholder="Employer Signature" style={inputStyle} />

      <label style={sectionLabel}>Children Under 18</label>
      <input placeholder="Child Full Name" style={inputStyle} />
      <select style={inputStyle}>
        <option value="">Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input placeholder="Birth Entry No." style={inputStyle} />
      <input placeholder="Age" style={inputStyle} />
      <input type="date" placeholder="Date of Birth" style={inputStyle} />

      <label style={sectionLabel}>Declaration</label>
      <p>I declare that the above information is correct and true.</p>
      <input type="date" style={inputStyle} />
      <input placeholder="Applicant Signature" style={inputStyle} />

           <p style={{ fontSize: 12, color: "red", marginTop: 30 }}>
        * False information leads to disqualification or repossession of the stand.
      </p>

      <button style={submitBtnStyle}>Submit Application</button>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "auto",
  padding: "30px",
  backgroundColor: "#f4faff",
  borderRadius: "12px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  fontFamily: "Arial, sans-serif",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#0c4da2",
  marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  height: "100px",
};

const sectionLabel: React.CSSProperties = {
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
  color: "#0c4da2",
};

const buttonGroupStyle: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginBottom: "20px",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 15px",
  border: "1px solid #0c4da2",
  borderRadius: "6px",
  backgroundColor: "#e6f0ff",
  color: "#0c4da2",
  cursor: "pointer",
};

const submitBtnStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  marginTop: "30px",
  fontSize: "18px",
  backgroundColor: "#0c4da2",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
