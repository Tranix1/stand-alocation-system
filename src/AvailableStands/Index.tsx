import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/HomeImages/490300580_1134612828680677_5289510439622376971_n.jpg";

const stands = [
  {
    location: "Ruwa",
    area: "500 x 700 m²",
    road: "Available",
    servicing: "Fully Serviced",
    waterSewer: "Connected",
    electricity: "Nearby Power Line",
    available: 10,
    image,
  },
  // Add more stand objects here
];

function StandCard({ stand }: { stand: typeof stands[0] }) {
  const navigate = useNavigate();

  return (
    <div style={{
      flex: '1 1 calc(33.333% - 16px)',
      minWidth: '280px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
      backgroundColor: '#ffffff',
      textAlign: 'left',
      gap: '16px',
      height: 'auto'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={stand.image}
          alt={`Stand in ${stand.location}`}
          style={{
            height: '100px',
            width: '140px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '10px'
          }}
        />
        <button
          style={{
            padding: '6px 14px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          aria-label={`Apply for stand in ${stand.location}`}
          onClick={() => navigate("/form", { state: stand })}
        >
          Apply Now
        </button>
      </div>
      <div style={{ flex: 1, fontSize: '13px', alignSelf: 'center' }}>
        <h4 style={{ margin: '0 0 6px', color: '#003366', fontSize: '14px' }}>
          Stand in {stand.location}
        </h4>
        <p style={{ margin: '2px 0' }}><strong>Area:</strong> {stand.area}</p>
        <p style={{ margin: '2px 0' }}><strong>Road:</strong> {stand.road}</p>
        <p style={{ margin: '2px 0' }}><strong>Servicing:</strong> {stand.servicing}</p>
        <p style={{ margin: '2px 0' }}><strong>Water & Sewer:</strong> {stand.waterSewer}</p>
        <p style={{ margin: '2px 0' }}><strong>Electricity:</strong> {stand.electricity}</p>
        <p style={{ margin: '4px 0', fontWeight: 'bold', color: '#007b00' }}>
          Available: {stand.available} Stands
        </p>
      </div>
    </div>
  );
}

export default function AvailableStands() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      justifyContent: 'space-between',
      maxWidth: '1000px',
      marginLeft: 110,
      marginTop: 13
    }}>
      {stands.map((stand, index) => (
        <StandCard key={index} stand={stand} />
      ))}
    </div>
  );
}