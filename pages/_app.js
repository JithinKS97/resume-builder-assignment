import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [resumes, setResumes] = useState([]);

  const addResume = (newResume) => {
    setResumes([...resumes, newResume]);
  };

  return <Component resumes={resumes} addResume={addResume} {...pageProps} />;
}

export default MyApp;
