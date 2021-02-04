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
      <div className="resume-view-contaniner">
        <style>{style}</style>
        <h3>Personal information</h3>
        <PersonalInfo personalInfo={personalInfo} />
        <h3>Education and experience</h3>
        <EducationalExperienceList
          educationExperienceList={educationExperienceList}
        />
        <h3>Skills</h3>
        <SkillList skills={skills} />
      </div>
    </>
  );
};

const style = `
.education-experience-container {
    margin-bottom:10px;
}
.education-experience-card {
  margin-top:10px;
}
.resume-view-contaniner h3 {
  margin-top:10px;
}
.skills-list-card {
  margin-bottom:40px;
}
`;
