import "./MainContent.css";
import TextArea from "../TextArea/TextArea";
import { useState } from "react";

function MainContent(): JSX.Element {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [keywords, setKeywords] = useState<string[]>();

  return (
    <div className="main-content-container">
      <h1 className="main-content-title">
        Job<span className="main-content-title-highlight">Buddy</span>
      </h1>

      {isFormSubmitted ? (
        <p>
          These are the optimal skills and keywords you should add on your
          resume:
        </p>
      ) : (
        <p>Enter a job description below to get started.</p>
      )}

      {isFormSubmitted ? (
        keywords?.map((keyword) => <p>{keyword}</p>)
      ) : (
        <TextArea
          setIsFormSubmitted={setIsFormSubmitted}
          setKeywords={setKeywords}
        />
      )}
    </div>
  );
}

export default MainContent;
