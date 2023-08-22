import "./TextArea.css";
import { useState } from "react";

function TextArea(): JSX.Element {
  const [text, setText] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="textarea-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TextArea;
