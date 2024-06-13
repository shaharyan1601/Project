import { cardDetails } from "./constants";
import BirthDay from "components/Birthday.png";
import BirthdayDecoration from "components/BirthdayDecoration.png";
import { useEffect,useState } from "react";
import Calendar from "./Calender";
import WishesModal from "./SendWishesModal";

const CardContainer = ({ title, description }) => {
  const birthdayDecStyle = { width: 30 };

  
  return (
    <div
      style={{
        border: "1px solid lightgrey",
        borderRadius: 20,
        boxShadow:
          "rgb(3 3 3 / 37%) 0px 3px 4px 0px, rgb(60 60 60 / 21%) 0px 3px 4px 0px inset",
      }}
    >
      <div
        className="Heading_container"
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontStyle: "italic", fontSize: 36 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            <img src={BirthdayDecoration} alt="" style={birthdayDecStyle} />
            {title}
            <img src={BirthdayDecoration} alt="" style={birthdayDecStyle} />
          </div>
        </h1>
        <div style={{ color: "#969191", fontSize: 15 }}>{description}</div>
      </div>
      <Calendar cardDetails={cardDetails} />
    </div>
  );
};


export default CardContainer;

export const DailyCardContainer = ({ day, cardDetails }) => (
  
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: 20,
      alignItems: "center",
    }}
  >
    <div
      style={{
        backgroundColor: "#552d59",
        width: 120,
        height: 40,
        borderRadius: 10,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 15,
      }}
    >
      {day}
    </div>
    <div
      className="Daily_Card_Container"
      style={{
        display: "flex",
        gap: 50,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {cardDetails.map((detail) => (
        <Card {...detail} />
      ))}
    </div>
  </div>
);

const Card = ({ profilePhoto, name, position, onSendWishes }) => {
  const leftStyle = {
    height: 170,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  };
  
const [OpenWishes, setOpenWishes] = useState(false);

const handleClickWishes = () => {
  setOpenWishes(true);
};

const handleCloseWishes = (newValue) => {
  setOpenWishes(false);
};

  return (
    <div
      style={{
        display: "flex",
        width: 250,
        boxShadow: "rgb(3 3 3 / 35%) 2px 6px 4px 1px",
        ...leftStyle,
      }}
    >
      <img src={BirthDay} alt="" style={leftStyle} />
      <div
        style={{
          display: "flex",
          padding: 10,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <img
          src={profilePhoto}
          alt=""
          style={{ width: 50, border: "1px solid black", borderRadius: 28 }}
        />
        <div style={{ color: "#552d59", fontSize: 16 }}>{name}</div>
        <div style={{ color: "#969191", fontSize: 12 }}>{position}</div>
        <div
          style={{
            color: "#e3a10f",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={handleClickWishes}
        >
          Send Wishes
        </div>
        {OpenWishes && (
            <WishesModal
              open={OpenWishes}
              handleClickListItem={handleClickWishes}
              handleClose={handleCloseWishes}
              title="Send Wishes"
            />
          )}
      </div>
    </div>
  );
};
