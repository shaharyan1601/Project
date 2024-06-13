import OrganizationHeader from "components/Utils/OrganizationHeader";
import CardContainer from "./CardContainer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Work from "components/Work.png";


const UpcomingAnniversary = () => {

  const [upcomingAnniversaries, setUpcomingAnniversaries] = useState([]);

  useEffect(() => {
    const fetchUpcomingAnniversaries = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/people/upcoming-work-anniversary`); 
        setUpcomingAnniversaries(response.data.data);
      } catch (error) {
        console.error('Error fetching upcoming anniversaries:', error);
      }
    };

    fetchUpcomingAnniversaries();
  }, []);

return(
  <div className="leave__history__container loan_list">
    <h3><img src={Work} alt="" /> UPCOMING ANNIVERSARY</h3>
     <p classname="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
    <CardContainer
      title="Work Anniversary"
      description="Work Anniversary list of the month"
    />
  </div>
)};

export default UpcomingAnniversary;
