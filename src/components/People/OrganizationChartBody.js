import { NavLink } from "react-router-dom";

const OrganizationChartBody = ({ peopleDetails }) => (
  <div className="people_organization_chart_body" style={{ paddingLeft: 10 }}>
    <OrganizationChartList
      key={`peopleDetails-directorGlobalOperations`}
      peopleDetails={peopleDetails.directorGlobalOperations}
    />
    <hr style={{ borderTop: "2px dashed lightgrey" }} />
    <OrganizationChartList
      key={`peopleDetails-directorITProjects`}
      peopleDetails={peopleDetails.directorITProjects}
    />
    <hr style={{ borderTop: "2px dashed lightgrey" }} />
    <OrganizationChartList
      key={`peopleDetails-ITProjectManager`}
      peopleDetails={peopleDetails.ITProjectManager}
    />
    <hr style={{ borderTop: "2px dashed lightgrey" }} />
    <OrganizationChartList
      key={`peopleDetails-employees`}
      peopleDetails={peopleDetails.employees}
    />
  </div>
);

export default OrganizationChartBody;

const OrganizationChartList = ({ peopleDetails }) => (
  <div className="organizationChartList_position">
    <h4 style={{ fontWeight: "bold" }}>{peopleDetails[0].position}</h4>

    <div
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      {peopleDetails.map((peopleDetail) => (
        <Info peopleDetails={peopleDetail} />
      ))}
    </div>
  </div>
);

const Info = ({ peopleDetails }) => {
  const { name, profilePhoto, employeePosition } = peopleDetails;

  return (
    <NavLink to="/info">
      <div
        className="peopleInfo_root"
        style={{
          display: "inline-flex",
          border: "1px solid lightgrey",
          borderRadius: 25,
          gap: 10,
          boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
        }}
      >
        <div className="profile-pic">
          <img src={profilePhoto} alt="" style={{ width: 50 }} />
        </div>
        <div
          style={{
            fontSize: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 130,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: "bold" }}>{name}</div>
            {employeePosition ? <div>{employeePosition}</div> : null}
          </div>
        </div>
      </div>
    </NavLink>
  );
};
