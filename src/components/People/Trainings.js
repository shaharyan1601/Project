import OrganizationHeader from "components/Utils/OrganizationHeader";

const Trainings = ({ trainingData }) => (
  <div className="leave__history__container loan_list" style={{ width: "auto" }}>
    <OrganizationHeader
      heading="Training"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas dolor saepe necessitatibus deserunt!"
    />
    {trainingData && <TrainingBody trainingData={trainingData} />}
  </div>
);

export default Trainings;

const TrainingBody = ({ trainingData }) => (
  <div>
    {trainingData.map((training, index) => (
      <TrainingData
        key={index}
        trainingName={training.trainingName}
        details={training.details}
      />
    ))}
  </div>
);

const TrainingData = ({ trainingName, details }) => (
  <div>
    <h4 style={{ fontWeight: "bold" }}>{trainingName}</h4>
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        border: "1px solid rgb(150, 145, 145, 0.5)",
        borderRadius: 10,
      }}
    >
      {details.map((detail, i) => (
        <div
          style={{
            color: "rgb(150, 145, 145)",
            border: "1px solid rgb(150, 145, 145, 0.5)",
            padding: 10,
            borderTopLeftRadius: i === 0 ? 10 : null,
            borderTopRightRadius: i === 0 ? 10 : null,
            borderBottomLeftRadius: i === details.length - 1 ? 10 : null,
            borderBottomRightRadius: i === details.length - 1 ? 10 : null,
          }}
        >
          {detail}
        </div>
      ))}
    </div>
  </div>
);
