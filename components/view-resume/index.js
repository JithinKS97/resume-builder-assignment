import PersonalInfo from "./PersonalInfo";
import EducationalExperienceList from "./EducationalExperienceList";
import SkillList from "./SkillList";

export default (props) => {
  const { resume } = props;
  const { personalInfo, educationExperienceList, skills } = resume;
  return (
    <>
      <PersonalInfo personalInfo={personalInfo} />
      <EducationalExperienceList
        educationExperienceList={educationExperienceList}
      />
      <SkillList skills={skills} />
    </>
  );
};
