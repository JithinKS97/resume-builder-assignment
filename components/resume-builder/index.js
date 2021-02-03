import PersonalInfo from "./PersonalInfo";
import ExperienceList from "./ExperienceList";

export default () => {

  const personalInfo = {
    name:"Jithin",
    email:"jithin.ks@gmail.com",
    address:"adddress",
    phonenumber:"phonenumber"
  }

  return (
    <>
      <style>{style}</style>
      <div className="resume-builder-container">
        <PersonalInfo
          personalInfo={personalInfo}
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
