import React, { useState,useEffect } from "react";
import talentpool from "components/talentpool.png";
import axios from "axios";


const boxData = [
  { title: "IT DEPARTMENT", count: 3 },
  { title: "AXZORA JUST FIX IT", count: 3 },
  { title: "AXZORA RESOURCING", count: 0 },
  { title: "AXZORA TALENTWISE", count: 0 },
  { title: "AXZORA FINANCE", count: 0 },
];

// Reusable functional component for each box
const Box = ({ title, count }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: 250,
        height: 150,
        marginRight: 20,
        marginBottom: 20,
        padding: 20,
        boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
        borderRadius: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: hovered ? "#520d52" : "#ffffff",
        color: hovered ? "white" : "black",
        marginLeft: 80,
        cursor: "pointer", // Add cursor pointer on hover
        transition: "background-color 0.3s ease, color 0.3s ease", // Add smooth transition on hover
      }}
      
      onMouseEnter={() => setHovered(true)} // Set hovered state to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered state to false on mouse leave
    >
      <h4>{title}</h4>
      <p style={{ color: "gray" }}>{count} Candidates</p>
    </div>
  );
};
const getAccessToken = () => {
 
  return "your-access-token"; 
};
const TalentPool = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const accessToken = getAccessToken();
    const fetchTalentPools = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/hiring/talent_pool`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, 
          },
        });
        
        setPools(response.data.data);
      } catch (error) {
        console.error("Error fetching talent pools:", error);
      }
    };

    fetchTalentPools();
  }, []);
  const rows = [];
  let currentRow = [];

  for (let i = 0; i < boxData.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      rows.push(currentRow);
      currentRow = [];
    }
    currentRow.push(boxData[i]);
  }
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return (
    <div className="leave__history__container loan_list">
      <h3>
        <img src={talentpool} alt="" /> TALENT POOL
      </h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div style={{ marginTop: 40 }}>
        {/* Map through the rows to generate boxes */}
        {rows.map((row, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              marginBottom: 20,
            }}
          >
            {row.map((box, idx) => (
              <Box key={idx} title={box.title} count={box.count} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TalentPool; 
