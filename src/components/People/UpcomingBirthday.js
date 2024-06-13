import OrganizationHeader from "components/Utils/OrganizationHeader";
import CardContainer from "./CardContainer";
import axios from "axios";
import React, {useEffect, useState} from "react";

import bd from "components/bd.png";

const UpcomingBirthday = () => {
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);


  useEffect(() => {
    const fetchUpcomingBirthdays = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/people/upcoming-birthdays`); 
        setUpcomingBirthdays(response.data.data);
      } catch (error) {
        console.error("Error fetching upcoming birthdays:", error);
      }
    };
    fetchUpcomingBirthdays();
  }, []);

  return (
    <div className="leave__history__container loan_list">
    <h3><img src={bd} alt="" /> UPCOMING BIRTHDAY</h3>
     <p classname="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
      <CardContainer
        title="Happy Birthday"
        description="Birthday list of the month"
        cardDetails={upcomingBirthdays} // Pass fetched data to CardContainer
      />
    </div>
  );
};

export default UpcomingBirthday;
