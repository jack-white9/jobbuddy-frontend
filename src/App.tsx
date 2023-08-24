import "./App.css";
import ImageContent from "./components/ImageContent/ImageContent";
import MainContent from "./components/MainContent/MainContent";

function App(): JSX.Element {
  return (
    <div className="root-container">
      <section className="page-container">
        <MainContent />
        <ImageContent />
      </section>
    </div>
  );
}

export default App;
