import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import Modal from "react-modal";

// Add modal root
Modal.setAppElement("#root");

export default function ApplicationForm() {


const [showPaymentModal, setShowPaymentModal] = useState(false);
const [paymentStage, setPaymentStage] = useState<"input" | "processing" | "success">("input");
const [paymentData, setPaymentData] = useState({ phone: "", method: "" });




<Modal isOpen={showPaymentModal} onRequestClose={() => setShowPaymentModal(false)} style={{
  content: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    inset: "40px auto auto auto",
  }
}}>
  {paymentStage === "input" && (
    <div>
      <h3>Enter Payment Details</h3>
      <input
        placeholder="Phone Number"
        style={inputStyle}
        value={paymentData.phone}
        onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
      />
      <select
        style={inputStyle}
        value={paymentData.method}
        onChange={(e) => setPaymentData({ ...paymentData, method: e.target.value })}
      >
        <option value="">Select Method</option>
        <option value="ecocash">EcoCash</option>
        <option value="netone">NetOne</option>
      </select>
      <button
        style={submitBtnStyle}
        onClick={() => {
          setPaymentStage("processing");
          // Simulate payment delay
          setTimeout(() => {
            setPaymentStage("success");
          }, 3000);
        }}
      >
        Submit Payment
      </button>
    </div>
  )}

  {paymentStage === "processing" && (
    <div>
      <p>Processing payment... Please wait.</p>
    </div>
  )}

  {paymentStage === "success" && (
    <div>
      <h3>Payment Successful 🎉</h3>
      <button
        style={submitBtnStyle}
        onClick={async () => {
          await handleSubmit({ preventDefault: () => {} } as React.MouseEvent<HTMLButtonElement>);
          setShowPaymentModal(false);
          setPaymentStage("input");
          setPaymentData({ phone: "", method: "" });
        }}
      >
        Finish Application
      </button>
    </div>
  )}
</Modal>










  const [formData, setFormData] = useState({
    fullName: "",
    sex: "",
    idNumber: "",
    dob: "",
    salary: "",
    maritalStatus: "",
    spouseFirstName: "",
    spouseSurname: "",
    spouseId: "",
    spouseSalary: "",
    address: "",
    tenureStatus: "",
    accommodationType: "",
    employmentType: "",
    employerName: "",
    employerAddress: "",
    contactPhone: "",
    staffNo: "",
    workNature: "",
    date: "",
    employerSignature: "",
    childName: "",
    childSex: "",
    childBirthNo: "",
    childAge: "",
    childDob: "",
    declarationDate: "",
    applicantSignature: "",
  });

  // const [formData, setFormData] = useState({
  //   fullName: "John Doe",
  //   sex: "Male",
  //   idNumber: "1234567890",
  //   dob: "1990-01-01",
  //   salary: "1500",
  //   maritalStatus: "Single",
  //   spouseFirstName: "Jane",
  //   spouseSurname: "Doe",
  //   spouseId: "0987654321",
  //   spouseSalary: "1200",
  //   address: "123 Main St, Harare",
  //   tenureStatus: "Tenant",
  //   accommodationType: "Medium Density Stand",
  //   employmentType: "City of Harare",
  //   employerName: "Harare City Council",
  //   employerAddress: "City Hall, Harare",
  //   contactPhone: "+263 712345678",
  //   staffNo: "A12345",
  //   workNature: "Administration",
  //   date: "2025-07-30",
  //   employerSignature: "John Supervisor",
  //   childName: "Little John",
  //   childSex: "Male",
  //   childBirthNo: "B123456",
  //   childAge: "8",
  //   childDob: "2017-05-05",
  //   declarationDate: "2025-07-30",
  //   applicantSignature: "John Doe",
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPaymentModal(true)
    const paymentData = {
  fullName: "Jane Chikomo",
  phone: "0771234567",
  method: "ecocash",
  amount: 10,
  status: "approved",
  createdAt: "2025-07-30T08:12:00.000Z"
}

    try {
      const docRef = await addDoc(collection(db, "Payments"),paymentData );
      alert("done")
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div style={containerStyle}>
      {showPaymentModal && (
  <div style={overlayStyle}>
    <div style={modalContentStyle}>
      {paymentStage === "input" && (
        <>
          <h3>Enter Payment Details</h3>
          <input
            placeholder="Phone Number"
            style={inputStyle}
            value={paymentData.phone}
            onChange={(e) => setPaymentData({ ...paymentData, phone: e.target.value })}
          />
          <select
            style={inputStyle}
            value={paymentData.method}
            onChange={(e) => setPaymentData({ ...paymentData, method: e.target.value })}
          >
            <option value="">Select Method</option>
            <option value="ecocash">EcoCash</option>
            <option value="netone">NetOne</option>
          </select>
          <button
            style={submitBtnStyle}
            onClick={() => {
              setPaymentStage("processing");
              setTimeout(() => {
                setPaymentStage("success");
              }, 2000);
            }}
          >
            Submit Payment
          </button>
        </>
      )}

      {paymentStage === "processing" && <p>Processing payment...</p>}

      {paymentStage === "success" && (
        <>
          <h3>Payment Successful 🎉</h3>
          <button
            style={submitBtnStyle}
            onClick={async () => {
              await handleSubmit({ preventDefault: () => {} } as React.MouseEvent<HTMLButtonElement>);
              setShowPaymentModal(false);
              setPaymentStage("input");
              setPaymentData({ phone: "", method: "" });
            }}
          >
            Finish Application
          </button>
        </>
      )}

      <button style={{ ...submitBtnStyle, backgroundColor: "#aaa", marginTop: 10 }} onClick={() => setShowPaymentModal(false)}>
        Close
      </button>
    </div>
  </div>
)}

      <h2 style={headerStyle}>Harare City Council Stand Application Form</h2>

      <input name="fullName" placeholder="Full Name" style={inputStyle} onChange={handleChange} value={formData.fullName} />

      <select name="sex" style={inputStyle} onChange={handleChange} value={formData.sex}>
        <option value="">Select Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input name="idNumber" placeholder="ID Number" style={inputStyle} onChange={handleChange} value={formData.idNumber} />
      <input type="date" name="dob" style={inputStyle} onChange={handleChange} value={formData.dob} />
      <input name="salary" placeholder="Monthly Salary (USD)" style={inputStyle} onChange={handleChange} value={formData.salary} />

      <label style={sectionLabel}>Marital Status</label>
      <div style={buttonGroupStyle}>
        {["Single", "Married", "Divorced", "Widowed"].map((status) => (
          <button type="button" key={status} style={buttonStyle} onClick={() => handleSelect("maritalStatus", status)}>
            {status}
          </button>
        ))}
      </div>

      <input name="spouseFirstName" placeholder="Spouse First Name" style={inputStyle} onChange={handleChange} value={formData.spouseFirstName} />
      <input name="spouseSurname" placeholder="Spouse Surname" style={inputStyle} onChange={handleChange} value={formData.spouseSurname} />
      <input name="spouseId" placeholder="Spouse ID" style={inputStyle} onChange={handleChange} value={formData.spouseId} />
      <input name="spouseSalary" placeholder="Spouse Monthly Salary" style={inputStyle} onChange={handleChange} value={formData.spouseSalary} />

      <label style={sectionLabel}>Current Address</label>
      <textarea name="address" placeholder="Current Address" style={textareaStyle} onChange={handleChange} value={formData.address}></textarea>

      <label style={sectionLabel}>Tenure Status</label>
      <div style={buttonGroupStyle}>
        {["Lodger", "Boarder", "Tenant", "Tied Tenant"].map((type) => (
          <button type="button" key={type} style={buttonStyle} onClick={() => handleSelect("tenureStatus", type)}>
            {type}
          </button>
        ))}
      </div>

      <label style={sectionLabel}>Type of Accommodation Sought</label>
      <select name="accommodationType" style={inputStyle} onChange={handleChange} value={formData.accommodationType}>
        <option value="">Select Type</option>
        <option>Rented House/Flat</option>
        <option>High Density Stand</option>
        <option>Medium Density Stand</option>
        <option>Low Density Stand</option>
      </select>

      <label style={sectionLabel}>Employment Details</label>
      <div style={buttonGroupStyle}>
        {["City of Harare", "Civil Servant", "Other"].map((emp) => (
          <button type="button" key={emp} style={buttonStyle} onClick={() => handleSelect("employmentType", emp)}>
            {emp}
          </button>
        ))}
      </div>

      <input name="employerName" placeholder="Employer Name" style={inputStyle} onChange={handleChange} value={formData.employerName} />
      <textarea name="employerAddress" placeholder="Employer Address" style={textareaStyle} onChange={handleChange} value={formData.employerAddress}></textarea>
      <input name="contactPhone" placeholder="Contact Phone/Cell" style={inputStyle} onChange={handleChange} value={formData.contactPhone} />
      <input name="staffNo" placeholder="Staff No." style={inputStyle} onChange={handleChange} value={formData.staffNo} />
      <input name="workNature" placeholder="Nature of Work" style={inputStyle} onChange={handleChange} value={formData.workNature} />
      <input type="date" name="date" style={inputStyle} onChange={handleChange} value={formData.date} />
      <input name="employerSignature" placeholder="Employer Signature" style={inputStyle} onChange={handleChange} value={formData.employerSignature} />

      <label style={sectionLabel}>Children Under 18</label>
      <input name="childName" placeholder="Child Full Name" style={inputStyle} onChange={handleChange} value={formData.childName} />
      <select name="childSex" style={inputStyle} onChange={handleChange} value={formData.childSex}>
        <option value="">Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input name="childBirthNo" placeholder="Birth Entry No." style={inputStyle} onChange={handleChange} value={formData.childBirthNo} />
      <input name="childAge" placeholder="Age" style={inputStyle} onChange={handleChange} value={formData.childAge} />
      <input type="date" name="childDob" style={inputStyle} onChange={handleChange} value={formData.childDob} />

      <label style={sectionLabel}>Declaration</label>
      <p>I declare that the above information is correct and true.</p>
      <input type="date" name="declarationDate" style={inputStyle} onChange={handleChange} value={formData.declarationDate} />
      <input name="applicantSignature" placeholder="Applicant Signature" style={inputStyle} onChange={handleChange} value={formData.applicantSignature} />

      <p style={{ fontSize: 12, color: "red", marginTop: 30 }}>
        * False information leads to disqualification or repossession of the stand.
      </p>

      <button style={submitBtnStyle} onClick={handleSubmit}>Submit and Make payment</button>
    </div>
  );
}


const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "auto",
  marginLeft:160 ,
  marginTop:20,
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
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "400px",
  textAlign: "center",
};

