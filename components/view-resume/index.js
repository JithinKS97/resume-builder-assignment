import PersonalInfo from "./PersonalInfo";
import EducationalExperienceList from "./EducationalExperienceList";
import SkillList from "./SkillList";

export default (props) => {
  const { resume } = props;
  if (!resume) {
    return null;
  }
  const { personalInfo, educationExperienceList, skills } = resume;
  return (
    <>
      <style>{style}</style>
      <h3>Personal information</h3>
      <PersonalInfo personalInfo={personalInfo} />
      <h3>Education and experience</h3>
      <EducationalExperienceList
        educationExperienceList={educationExperienceList}
      />
      <h3>Skills</h3>
      <SkillList skills={skills} />
    </>
  );
};

const style = `
.education-experience-container {
    margin-bottom:10px;
}
`;
