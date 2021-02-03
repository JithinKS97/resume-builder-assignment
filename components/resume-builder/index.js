import PersonalInfo from "./PersonalInfo";
import ExperienceList from "./ExperienceList";
import { useState } from "react";

export default () => {

  const defaultInfo = {
    name:"",
    email:"",
    address:"",
    phonenumber:""
  }
  
  const [personalInfo, setPersonalInfo] = useState(defaultInfo)

  const handleChange = (field, value) => {
    const updatedInfo = {
      ...personalInfo,
      [field]:value
    }
    setPersonalInfo(updatedInfo)
  }

  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <PersonalInfo
          personalInfo={personalInfo}
          onChange={handleChange}
        />
        <ExperienceList />
      </div>
    </>
  );
};

const style = `
  .resume-builder-container {
    width:60vw;
    margin:auto;
    margin-top:20px;
  }
  .experience {
    display:flex;
    flex-direction:row;
    justify-content: space-between;
  }
`;
