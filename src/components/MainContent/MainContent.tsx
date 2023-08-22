import "./MainContent.css";
import TextArea from "../TextArea/TextArea";

function MainContent(): JSX.Element {
  return (
    <div className="main-content-container">
      <h1 className="main-content-title">
        Job<span className="main-content-title-highlight">Buddy</span>
      </h1>
      <p>Enter a job description below to get started.</p>
      <TextArea />
    </div>
  );
}

export default MainContent;
