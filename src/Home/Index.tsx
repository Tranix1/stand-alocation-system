import image1 from "../assets/HomeImages/490300580_1134612828680677_5289510439622376971_n.jpg";
import image2 from "../assets/HomeImages/8-hre.webp";
import image3 from "../assets/HomeImages/image-1.webp";
// import image4 from "../assets/HomeImages/images (1).jpeg";
import image5 from "../assets/HomeImages/images (2).jpeg";
import image6 from "../assets/HomeImages/images.jpeg";

export default function Home() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#f4f7fa", color: "#333",marginLeft:190 }}>
      {/* Top Hero Section */}
      <div
        style={{
          background: "linear-gradient(to right, rgba(0,88,166,0.9), rgba(0,88,166,0.8))",
          padding: "60px 30px",
          color: "#fff",
          textAlign: "center",
          borderBottom: "5px solid #005bbb",
        }}
      >
        <h1 style={{ fontSize: "2.7rem", marginBottom: 15 }}>
          Harare City Council Stand Application
        </h1>
        <p style={{ maxWidth: 750, margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>
          Your gateway to secure, affordable residential stands in Harare, Ruwa, and Norton.
          Apply easily, join the official waiting list, and track your progress — all online.
        </p>
        <button
          style={{
            marginTop: 25,
            padding: "12px 35px",
            fontSize: "1rem",
            background: "linear-gradient(135deg, #ffc107, #ff9800)",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
          }}
        >
          Apply Now
        </button>
      </div>

      {/* Image 1 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <img
          src={image1}
          alt="Harare Council"
          style={{
            width: "90%",
            maxWidth: 900,
            borderRadius: 15,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Process Explanation Section */}
      <div style={{ textAlign: "center", padding: "50px 20px", backgroundColor: "#ffffff" }}>
        <h2 style={{ fontSize: "1.8rem", color: "#005bbb", marginBottom: 15 }}>
          Applying Has Never Been This Easy
        </h2>
        <p style={{ maxWidth: 700, margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
          Fill out a simple online form, upload your documents, and you're on the list! 
          No queues. No paperwork. No stress. 
          Get notified when your turn comes — just sit back and relax.
        </p>
      </div>

      {/* Image 2 */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <img
          src={image2}
          alt="City Landscape"
          style={{
            width: "90%",
            maxWidth: 900,
            borderRadius: 15,
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* Trust + Unique CTA Section */}
      <div
        style={{
          background: "#e3f2fd",
          padding: "50px 25px",
          textAlign: "center",
          borderTop: "5px solid #005bbb",
          marginTop: 50,
        }}
      >
        <h2 style={{ fontSize: "1.9rem", color: "#003366", marginBottom: 15 }}>
          Why Apply With Us?
        </h2>
        <p style={{ fontSize: "1rem", maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
          ✨ 100% official platform endorsed by Harare City Council <br />
          🕒 Real-time application tracking & notifications <br />
          🔒 Secure, transparent, and verified application process
        </p>
        <button
          style={{
            marginTop: 25,
            padding: "12px 35px",
            fontSize: "1rem",
            backgroundColor: "#005bbb",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Start Application
        </button>
      </div>

      {/* Small Images Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
          flexWrap: "wrap",
          padding: "40px 20px",
        }}
      >
        <img src={image3} alt="Community" style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 10 }} />
        {/* <img src={image4} alt="Removed" /> */}
        <img src={image5} alt="Planning" style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 10 }} />
        <img src={image6} alt="Housing" style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 10 }} />
      </div>

      {/* Requirements Section */}
      <div style={{ padding: "50px 20px", textAlign: "center", backgroundColor: "#ffffff" }}>
        <h2 style={{ color: "#005bbb", fontSize: "1.7rem", marginBottom: 15 }}>Who Can Apply?</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1rem", lineHeight: 2 }}>
          <li>✅ Zimbabwean National with valid ID (front & back)</li>
          <li>✅ Aged 18 years or older</li>
          <li>✅ Proof of residence (e.g. utility bill)</li>
          <li>✅ First-time applicant (not previously allocated a stand)</li>
          <li>✅ Willing to submit affidavit if applying on behalf of someone</li>
        </ul>
      </div>

      {/* Final CTA */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <button
          style={{
            padding: "13px 40px",
            fontSize: "1.1rem",
            backgroundColor: "#005bbb",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Apply for a Stand Now
        </button>
      </div>
    </div>
  );
}
