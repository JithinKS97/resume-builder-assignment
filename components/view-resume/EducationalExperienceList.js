import { Card, CardBody } from "reactstrap";

export default (props) => {
  const { educationExperienceList = [] } = props;
  return (
    <>
      {educationExperienceList.map((educationExperience) => {
        return (
          <>
            <Card className="education-experience-card">
              <CardBody>
                <div className="education-experience-container">
                  <div>
                    <span>
                      <b>Company/Institute:</b>
                    </span>{" "}
                    {educationExperience.company_institute}
                  </div>
                  <div>
                    <span>
                      <b>Year:</b>
                    </span>{" "}
                    {educationExperience.year}
                  </div>
                  <div>
                    <span>
                      <b>Designation/Degree:</b>
                    </span>{" "}
                    {educationExperience.designation_degree}
                  </div>
                </div>
              </CardBody>
            </Card>
          </>
        );
      })}
    </>
  );
};
