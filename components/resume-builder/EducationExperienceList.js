import EducationExperience from "./EducationExperience";
import { Button } from "reactstrap";

export default (props) => {
  const {
    educationExperienceList,
    handleAddClick,
    onChange:handleExperienceEducationChange,
  } = props;

  return (
    <>
      <div className="education-experience-list-container">
        <div className="add-button-container">
          <Button onClick={handleAddClick} className="add-button">
            Add experience / education
          </Button>
        </div>
        {educationExperienceList.map((educationExperience, index) => (
          <EducationExperience
            key={index}
            educationExperience={educationExperience}
            index={index}
            onChange={handleExperienceEducationChange}
          />
        ))}
      </div>
    </>
  );
};
