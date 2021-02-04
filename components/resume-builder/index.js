import PersonalInfo from "./PersonalInfo";
import EducationExperienceList from "./EducationExperienceList";
import { useState } from "react";
import SkillsList from "./SkillList";
import { Button } from "reactstrap";
import { useEffect } from "react";
import { useRouter } from "next/router"

export default (props) => {
  const { addResume, resume, index, updateResume } = props;
  const [personalInfo, setPersonalInfo] = useState(defaultInfo);
  const [educationExperienceList, setEducationExperienceList] = useState(
    defaultEducationExperienceList
  );
  const [skills, setSkills] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (resume) {
      setPersonalInfo(resume.personalInfo);
      setEducationExperienceList(resume.educationExperienceList);
      setSkills(resume.skills);
    } else {
      setPersonalInfo(defaultInfo);
      setEducationExperienceList(defaultEducationExperienceList);
      setSkills([]);
    }
  }, [resume]);

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
    let valueToUpdate = educationExperienceList[index];
    const updatedValue = {
      ...valueToUpdate,
      [field]: value,
    };
    setEducationExperienceList([
      ...educationExperienceList.slice(0, index),
      updatedValue,
      ...educationExperienceList.slice(index + 1),
    ]);
  };

  const handleExperienceEducationDelete = (index) => {
    if (educationExperienceList.length === 1) {
      return;
    }
    setEducationExperienceList([
      ...educationExperienceList.slice(0, index),
      ...educationExperienceList.slice(index + 1),
    ]);
  };

  const handleSkillDelete = (i) => {
    setSkills(skills.filter((_tag, index) => index !== i));
  };

  const handleSkillAdd = (tag) => {
    setSkills([...skills, tag]);
  };

  const validate = () => {
    const validations = [];
    if (!personalInfo.name) {
      validations.push("Name should not be empty");
    }
    if (!personalInfo.email) {
      validations.push("Email should not be empty");
    }
    if (!personalInfo.address) {
      validations.push("Address should not be empty");
    }
    if (!personalInfo.phonenumber) {
      validations.push("Phone number should not be empty");
    }

    if (
      !educationExperienceList.some((educationExperience) => {
        return (
          educationExperience.company_institute !== "" &&
          educationExperience.year !== "" &&
          educationExperience.designation_degree !== ""
        );
      })
    ) {
      validations.push("Education / experience information not filled");
    }

    if (skills.length === 0) {
      validations.push("Add atleast one skill");
    }

    if (validations.length === 0) {
      return true;
    } else {
      alert(validations.join("\n"));
    }
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    if (index !== null) {
      updateResume(
        {
          personalInfo,
          educationExperienceList,
          skills,
        },
        index
      );
      alert("Resume updated");
    } else {
      const title = window.prompt("Enter a title for resume");
      if (title) {
        addResume({
          title,
          personalInfo,
          educationExperienceList,
          skills,
        });
        alert("Resume added");
      }
    }
    router.push("/list")
  };

  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <h2>Personal information</h2>
        <PersonalInfo
          personalInfo={personalInfo}
          onChange={handlePersonalInfoChange}
        />
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
        <Button
          onClick={handleSubmit}
          className="submit-button"
          color="primary"
        >
          {index !== null ? "Save Resume" : "Submit Resume"}
        </Button>
      </div>
    </>
  );
};

const style = `
  input[type="text"]:focus, input[type="password"]:focus{
    border:2px solid #50C878;
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
  .skill-list-container input {
    padding:15px;
    outline: 0px none;
  }
  .tag-wrapper.ReactTags__tag {
    margin-bottom:10px !important;
  }
  .submit-button {
    float:right;
    margin-top:80px;
    margin-bottom:50px;
  }
`;

const defaultInfo = {
  name: "",
  email: "",
  address: "",
  phonenumber: "",
};

const defaultEducationExperienceList = [
  { company_institute: "", year: "", designation_degree: "" },
];
