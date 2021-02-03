import PersonalInfo from "./PersonalInfo";
import EducationExperienceList from "./EducationExperienceList";
import { useState } from "react";

export default () => {
  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationExperienceList, setEducationExperienceList] = useState([]);

  const handleChange = (field, value) => {
    const updatedInfo = {
      ...personalInfo,
      [field]: value,
    };
    setPersonalInfo(updatedInfo);
  };

  const handleAddClick = () => {
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

  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <h2>Personal information</h2>
        <PersonalInfo personalInfo={personalInfo} onChange={handleChange} />
        <h2 className="education-experience-title">Experience / education</h2>
        <EducationExperienceList
          educationExperienceList={educationExperienceList}
          handleAddClick={handleAddClick}
          onChange={handleExperienceEducationChange}
        />
      </div>
    </>
  );
};

const style = `
  .resume-builder-container {
    width:62vw;
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
  }
  .education-experience-title {
    margin-top:40px;
    margin-bottom:10px;
  }
  .add-button {
    margin:10px 0;
  }
  .education-experience-list-container {
    margin-bottom:50px;
  }
`;

const defaultInfo = {
  name: "",
  email: "",
  address: "",
  phonenumber: "",
};
