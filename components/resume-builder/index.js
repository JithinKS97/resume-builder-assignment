import PersonalInfo from "./PersonalInfo";
import EducationExperienceList from "./EducationExperienceList";
import { useState } from "react";
import SkillsList from './SkillList';

export default () => {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationExperienceList, setEducationExperienceList] = useState(defaultEducationExperienceList);
  const [skills, setSkills] = useState([])

  const handlePersonalInfoChange = (field, value) => {
    const updatedInfo = {
      ...personalInfo,
      [field]: value,
    };
    setPersonalInfo(updatedInfo);
  };

  const handleExperienceEducationAddClick = () => {
    setEducationExperienceList([
      ...educationExperienceList,
      { company_institute: "", year: "", designation_degree: "" },
    ]);
  };

  const handleExperienceEducationChange = (index, field, value) => {
    let valueToUpdate = educationExperienceList[index]
    const updatedValue = {
      ...valueToUpdate,
      [field]:value
    }
    setEducationExperienceList(
      [
        ...educationExperienceList.slice(0,index),
        updatedValue,
        ...educationExperienceList.slice(index+1)
      ]
    )
  }

  const handleExperienceEducationDelete = (index) => {
    if(educationExperienceList.length===1) {
      return;
    }
    setEducationExperienceList(
      [
        ...educationExperienceList.slice(0,index),
        ...educationExperienceList.slice(index+1)
      ]
    )
  }

  const handleSkillDelete = (i) => {
    setSkills(
      skills.filter((_tag, index) => index !== i)
    )
  }

  const handleSkillAdd = (tag) => {
    setSkills(
      [...skills, tag]
    )
  }

  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <h2>Personal information</h2>
        <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
        <h2 className="title">Experience / education</h2>
        <EducationExperienceList
          educationExperienceList={educationExperienceList}
          onAddClick={handleExperienceEducationAddClick}
          onChange={handleExperienceEducationChange}
          onDelete={handleExperienceEducationDelete}
        />
         <h2 className="title">Skills</h2>
        <SkillsList
          onAdd={handleSkillAdd}
          onDelete={handleSkillDelete}
          tags={skills}
        />
      </div>
    </>
  );
};

const style = `
  .resume-builder-container {
    width:50vw;
    margin:auto;
    margin-top:20px;
  }
  .education-experience-container {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
  }
  .education-experience-card {
    margin-top:10px;
    display:flex;
    flex-direction:row;
  }
  .title {
    margin-top:20px;
  }
  .add-button {
    margin:10px 0;
  }
  .delete-button {
    margin:5px;
  }
  .education-experience-container input {
    width:90%;
  }
  .skill-list-container {
    margin-bottom:100px;
  }
  .skill-list-container input {
    padding:15px;
    outline: 0px none;
  }
  .tag-wrapper.ReactTags__tag {
    margin-bottom:10px !important;
  }
`;

const defaultInfo = {
  name: "",
  email: "",
  address: "",
  phonenumber: "",
};

const defaultEducationExperienceList = [
  { company_institute: "", year: "", designation_degree: "" }
]
