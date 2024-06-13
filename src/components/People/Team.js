import "./Team.css";
import OrganizationHeader from "components/Utils/OrganizationHeader";
import OrganizationChartBody from "./OrganizationChartBody";
import { peopleDetails } from "./constants";
import Organizationchart from "components/Organizationchart.png";

const PeopleTeam = () => (
  <div className="leave__history__container loan_list people_organization_chart_header_root">
     <h3><img src={Organizationchart} alt="" /> ORGANIZATION CHART</h3>
     <p classname="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
    <OrganizationChartBody peopleDetails={peopleDetails} />
  </div>
);

export default PeopleTeam;
