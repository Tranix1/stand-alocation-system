import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import Modal from "react-modal";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase"; // a
// Add modal root
Modal.setAppElement("#root");
import { useLocation } from "react-router-dom";

import handleMakePayment from "../../utils/Pyament"


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


// ...existing code...

const [uploads, setUploads] = useState({
  idFront: null as File | null,
  idBack: null as File | null,
  proofResidence: null as File | null,
  affidavit: null as File | null,
  marriageCert: null as File | null,
});

const handleFileChange = (key: keyof typeof uploads, file: File | null) => {
  setUploads((prev) => ({ ...prev, [key]: file }));
};

const renderUpload = (label: string, key: keyof typeof uploads) => (
  <div style={{ textAlign: "center", margin: "0 12px" }}>
    <p style={{ fontWeight: "bold", marginBottom: 8 }}>{label}</p>
    <label
      style={{
        display: "inline-block",
        padding: "10px 18px",
        background: "#e6f0ff",
        color: "#0c4da2",
        borderRadius: "8px",
        border: "1px solid #0c4da2",
        cursor: "pointer",
        fontWeight: 500,
        marginBottom: "8px",
      }}
    >
      {uploads[key] ? "Change Image" : "Select Image"}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) =>
          handleFileChange(key, e.target.files && e.target.files[0] ? e.target.files[0] : null)
        }
      />
    </label>
    {uploads[key] && (
      <img
        src={URL.createObjectURL(uploads[key]!)}
        alt={label}
        style={{
          marginTop: 8,
          width: 90,
          height: 70,
          objectFit: "cover",
          borderRadius: "6px",
          border: "1px solid #0c4da2",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        }}
      />
    )}
  </div>
);
 const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [infoIsTrue, setInfoIsTrue] = useState(false);
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
    numverOChildren:"" ,
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


    const [errorFields, setErrorFields] = useState<string[]>([]);
  const [showErrorOverlay, setShowErrorOverlay] = useState(false);

//  const requiredFields = [
//     "fullName", "sex", "idNumber", "dob", "salary", "maritalStatus",
//     "address", "tenureStatus",
//   ];



const today = new Date();
const eighteenYearsAgo = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
const maxDate = eighteenYearsAgo.toISOString().split("T")[0];


const requiredFields = ["fullName", "dob"];

const validateForm = () => {
  let missing: string[] = [];

  // check required fields
  requiredFields.forEach((field) => {
    if (!formData[field]) {
      missing.push(field);
    }
  });

  // check length condition for fullName
  if (formData.fullName && formData.fullName.trim().length < 6) {
    missing.push("fullName");
  }

  // check age (must be >= 19)
  if (formData.dob) {
    const dob = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age < 19) {
      missing.push("dob");
    }
  }

  setErrorFields(missing);
  return missing.length === 0;
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
      if (name === "salary" && value.length > 6) return;
      if (name === "contactPhone" && value.length > 10) return;
      

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (key: string, value: string) => {

    setFormData((prev) => ({ ...prev, [key]: value }));
  };


async function uploadImages(uploads: Record<string, File | null>, fullName: string) {
  const imageLinks: Record<string, string> = {};
  for (const key of Object.keys(uploads)) {
    const file = uploads[key];
    if (file) {
      const storageRef = ref(storage, `applications/${fullName}_${Date.now()}/${key}`);
      await uploadBytes(storageRef, file);
      imageLinks[key] = await getDownloadURL(storageRef);
    } else {
      imageLinks[key] = ""; // or null if you prefer
    }
  }
  return imageLinks;
}


  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    

    

 const imageLinks = await uploadImages(uploads, formData.fullName);

  // Set variables for each image link
  const idFrontLink = imageLinks.idFront;
  const idBackLink = imageLinks.idBack;
  const proofResidenceLink = imageLinks.proofResidence;
  const affidavitLink = imageLinks.affidavit;
  const marriageCertLink = imageLinks.marriageCert;




    const paymentData = {
  fullName: "Jane Chikomo",
  phone: "0771234567",
  method: "ecocash",
  amount: 10,
  status: "approved",
  createdAt: "2025-07-30T08:12:00.000Z",
  idFrontLink ,
  idBackLink

}

    try {
      const docRef = await addDoc(collection(db, "Payments"),paymentData );
      const docRefS = await addDoc(collection(db, "applications"),formData );
      alert("done")
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Submission failed. Try again.");
    }
  };

 


  const location = useLocation();
  const stand = location.state;

  console.log("Selected stand:", stand);

  return (
    <div style={containerStyle}>


{showErrorOverlay && (
  <div style={overlayStyle}>
    <div style={modalContentStyle}>
      <h3 style={{ color: "#d32f2f" }}>Missing Required Fields</h3>
      <ul style={{ color: "#d32f2f", textAlign: "left" }}>
        {errorFields.map((field) => (
          <li key={field}>{field.replace(/([A-Z])/g, " $1")}</li>
        ))}
      </ul>
      <button
        style={submitBtnStyle}
        onClick={() => setShowErrorOverlay(false)}
      >
        Close
      </button>
    </div>
  </div>
)}



      
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
              // setPaymentStage("processing");
              // setTimeout(() => {
              //   setPaymentStage("success");
              // }, 2000);

              handleMakePayment(10 , "stand Application Payment" ,setPaymentStage)
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

{stand ? (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "24px",
      background: "#e6f0ff",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      padding: "18px 24px",
      marginBottom: "28px",
      border: "1px solid #bcd4f7",
    }}
  >
    <img
      src={stand.image}
      alt={`Stand in ${stand.location}`}
      style={{
        height: "110px",
        width: "160px",
        objectFit: "cover",
        borderRadius: "8px",
        border: "2px solid #0c4da2",
        background: "#fff",
      }}
    />
    <div style={{ flex: 1 }}>
      <h3 style={{ margin: "0 0 10px", color: "#0c4da2", fontSize: "18px" }}>
        Stand in {stand.location}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "15px" }}>
        <li><strong>Area:</strong> {stand.area}</li>
        <li><strong>Road:</strong> {stand.road}</li>
        <li><strong>Servicing:</strong> {stand.servicing}</li>
        <li><strong>Water & Sewer:</strong> {stand.waterSewer}</li>
        <li><strong>Electricity:</strong> {stand.electricity}</li>
        <li style={{ fontWeight: "bold", color: "#007b00", marginTop: "8px" }}>
          Available: {stand.available} Stands
        </li>
      </ul>
    </div>
  </div>
) : (
  <p>No stand selected.</p>
)}




      <h2 style={headerStyle}>Harare City Council Stand Application Form</h2>

      <input name="fullName" placeholder="Full Name" maxLength={35} style={inputStyle} onChange={handleChange} value={formData.fullName} />

      <select name="sex" style={inputStyle} onChange={handleChange} value={formData.sex}>
        <option value="">Select Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input name="idNumber" placeholder="ID Number" style={inputStyle}  maxLength={12} onChange={handleChange} value={formData.idNumber} />
  <label style={sectionLabel}>Date OF Birth</label>
      {/* <input type="date" name="dob" style={inputStyle} onChange={handleChange} value={formData.dob} /> */}
<input
  type="date"
  name="dob"
  style={inputStyle}
  onChange={handleChange}
  value={formData.dob}
  max={maxDate}   // restricts to 18+
/>




      <input name="salary" placeholder="Monthly Salary (USD)" maxLength={6} type="number" style={inputStyle} onChange={handleChange} value={formData.salary} />

      <label style={sectionLabel}>Marital Status</label>
<div style={buttonGroupStyle}>
  {["Single", "Married", "Divorced", "Widowed"].map((status) => (
    <button
      type="button"
      key={status}
      style={
        formData.maritalStatus === status
          ? selectedButtonStyle   // ✅ if selected
          : buttonStyle           // default
      }
      onClick={() => handleSelect("maritalStatus", status)}
    >
      {status}
    </button>
  ))}
</div>

{formData.maritalStatus==="Married" &&<div>  
      <input name="spouseFirstName" placeholder="Spouse First Name" style={inputStyle} onChange={handleChange} value={formData.spouseFirstName} />
      <input name="spouseSurname" placeholder="Spouse Surname" style={inputStyle} onChange={handleChange} value={formData.spouseSurname} />
      <input name="spouseId" placeholder="Spouse ID" style={inputStyle} onChange={handleChange} value={formData.spouseId} />
      <input name="spouseSalary" placeholder="Spouse Monthly Salary" style={inputStyle} onChange={handleChange}  value={formData.spouseSalary} />
</div>}
      <label style={sectionLabel}>Current Address</label>
      <textarea name="address" placeholder="Current Address" style={textareaStyle} onChange={handleChange} value={formData.address}></textarea>

      <label style={sectionLabel}>Tenure Status</label>
      <div style={buttonGroupStyle}>
        {["Lodger", "Boarder", "Tenant", "Tied Tenant"].map((type) => (
           <button
      type="button"
      key={type}
      style={
        formData.tenureStatus === type
          ? selectedButtonStyle   // ✅ if selected
          : buttonStyle           // default
      }
      onClick={() => handleSelect("tenureStatus", type)}
    >
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
       
  <button
      type="button"
      key={emp}
      style={
        formData.tenureStatus === emp
          ? selectedButtonStyle   // ✅ if selected
          : buttonStyle           // default
      }
      onClick={() => handleSelect("tenureStatus", emp)}
    >
      {emp}
    </button>
          
        ))}
      </div>

      <input name="employerName" placeholder="Employer Name" style={inputStyle} onChange={handleChange} value={formData.employerName} />
      <textarea name="employerAddress" placeholder="Employer Address" style={textareaStyle} onChange={handleChange} value={formData.employerAddress}></textarea>
      <input name="contactPhone" type="number" placeholder="Contact Phone/Cell (07000000) " style={inputStyle} onChange={handleChange} value={formData.contactPhone} />
      <input name="staffNo" placeholder="Staff ID." maxLength={20} style={inputStyle} onChange={handleChange} value={formData.staffNo} />
      <input name="workNature" placeholder="Nature of Work" style={inputStyle} onChange={handleChange} value={formData.workNature} />


         <label style={sectionLabel}>Employment Details</label>
      <div style={buttonGroupStyle}>
        {["One", "Many", "None"].map((emp) => (
       
  <button
      type="button"
      key={emp}
      style={
        formData.numverOChildren === emp
          ? selectedButtonStyle   // ✅ if selected
          : buttonStyle           // default
      }
      onClick={() => handleSelect("numverOChildren", emp)}
    >
      {emp}
    </button>
          
        ))}
      </div>

       { formData.numverOChildren !== "None"&& formData.numverOChildren !=="" && <div> 
      <label style={sectionLabel}>Children Under 18</label>
      <input name="childName" placeholder="Child Full Name" maxLength={25} style={inputStyle} onChange={handleChange} value={formData.childName} />
      <select name="childSex" style={inputStyle} onChange={handleChange} value={formData.childSex}>
        <option value="">Sex</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input name="childBirthNo" placeholder="Birth Entry No." style={inputStyle} onChange={handleChange} value={formData.childBirthNo} />
      <input name="childAge" placeholder="Age" style={inputStyle} onChange={handleChange} value={formData.childAge} />
      <input type="date" name="childDob" style={inputStyle} onChange={handleChange} value={formData.childDob} />
      <button>select Another</button>
</div>}
      <label style={sectionLabel}>Declaration</label>
<div style={{ marginTop: "16px" }}>
      <label style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={() => setAcceptedTerms(!acceptedTerms)}
          style={{ marginRight: "8px" }}
        />
        I accept the Terms and Conditions
      </label>

      <label style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={infoIsTrue}
          onChange={() => setInfoIsTrue(!infoIsTrue)}
          style={{ marginRight: "8px" }}
        />
        I declare that the above information is correct and true
      </label>
    </div>


<div style={{ display: "flex", justifyContent: "center", marginTop: "20px", gap: "18px" }}>
  {renderUpload("Id front", "idFront")}
  {renderUpload("ID back", "idBack")}
  {renderUpload("Proof of residence", "proofResidence")}
  {renderUpload("Affidavit for proof of res", "affidavit")}
  {formData.maritalStatus==="Married"&& renderUpload("Marriage certificate", "marriageCert")}
</div>


      <p style={{ fontSize: 12, color: "red", marginTop: 30 }}>
        * False information leads to disqualification or repossession of the stand.
      </p>

      <button style={submitBtnStyle} onClick={()=>{    if (!validateForm()) {
      setShowErrorOverlay(true);
      if(!uploads.affidavit || !uploads.idBack || !uploads.idFront  || !uploads.proofResidence || (!uploads.marriageCert && formData.maritalStatus ==="" )){
  alert("Select all required images to proceed")
  return
}
      return;
    } setShowPaymentModal(true)} }>Submit and Make payment</button>
    </div>
  );
}


const containerStyle: React.CSSProperties = {
  maxWidth: "800px",
  margin: "auto",
  alignSelf:"center",
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
const selectedButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: "#4285f4",   // highlight color
  color: "#fff",
  border: "1px solid #4285f4",
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

