import OrganizationHeader from "components/Utils/OrganizationHeader";
import OrganizationChartBody from "./OrganizationChartBody";
import { peopleDetails } from "./constants";
import Organizationchart from "components/Organizationchart.png";

const PeopleEmployeeList = () => (
  <div className="leave__history__container loan_list ">
   <h3><img src={Organizationchart} alt=""  style={{marginLeft:"-3rem"}}/> ORGANIZATION CHART</h3>
        <p classname="faq-paragraph" style={{marginLeft:"1rem" , marginBottom:"3rem"}}>
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!"
            </p>
    <OrganizationChartBody peopleDetails={peopleDetails} />
  </div>
);

export default PeopleEmployeeList;
