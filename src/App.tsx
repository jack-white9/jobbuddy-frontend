import "./App.css";
import ImageContent from "./components/ImageContent/ImageContent";
import MainContent from "./components/MainContent/MainContent";

function App(): JSX.Element {
  return (
    <section className="page-container">
      <MainContent />
      <ImageContent />
    </section>
  );
}

export default App;
