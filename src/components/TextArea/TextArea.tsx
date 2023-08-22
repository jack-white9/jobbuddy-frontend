import "./TextArea.css";
import { useState } from "react";
import getDescriptionKeywords from "../../api/getDescriptionKeywords";

type TextAreaProps = {
  setIsFormSubmitted: (isFormSubmitted: boolean) => void;
  setKeywords: (keywords: string[]) => void;
};

function TextArea({
  setIsFormSubmitted,
  setKeywords,
}: TextAreaProps): JSX.Element {
  const [text, setText] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getDescriptionKeywords(text);
    setIsFormSubmitted(true);
    setKeywords(data);
  }

  return (
    <form className="textarea-form" onSubmit={handleSubmit}>
      <textarea
        className="textarea-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="textarea-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default TextArea;
