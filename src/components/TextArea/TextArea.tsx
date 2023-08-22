import "./TextArea.css";
import { useState } from "react";
import getDescriptionKeywords from "../../api/getDescriptionKeywords";

function TextArea(): JSX.Element {
  const [text, setText] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = await getDescriptionKeywords(text);
    console.log(data);
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
