import "./ImageContent.css";
import coffee from "../../assets/undraw_coffee_graphic.svg";

function ImageContent() {
  return (
    <div className="image-content-container">
      <img src={coffee} alt="Three cartoon characters drinking coffee" />
    </div>
  );
}

export default ImageContent;
