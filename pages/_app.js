import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [resumes, setResumes] = useState([]);

  const addResume = (newResume) => {
    setResumes([...resumes, newResume]);
  };

  const updateResume = (savedResume, index) => {
    const updatedResume  = {
        ...resumes[index],
        ...savedResume
    }
    setResumes([
      ...resumes.slice(0, index),
      updatedResume,
      ...resumes.slice(index + 1),
    ]);
  };

  const handleDelete = (index) => {
    setResumes([
      ...resumes.slice(0, index),
      ...resumes.slice(index + 1),
    ]);
  }

  return (
    <Component
      updateResume={updateResume}
      resumes={resumes}
      addResume={addResume}
      {...pageProps}
      handleDelete={handleDelete}
    />
  );
}

export default MyApp;
