import EducationExperience from "./EducationExperience";
import { Button } from "reactstrap";

export default (props) => {
  const { educationExperienceList, onAddClick, onChange, onDelete } = props;

  return (
    <>
      <div className="add-button-container">
        <Button color="primary" onClick={onAddClick} className="add-button">
          Add experience / education
        </Button>
      </div>
      {educationExperienceList.map((educationExperience, index) => (
        <EducationExperience
          key={index}
          educationExperience={educationExperience}
          index={index}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </>
  );
};
