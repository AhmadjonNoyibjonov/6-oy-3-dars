import "./App.css";
import Counter from "./components/Counter/counter";
import MediaPost from "./components/MediaPost/post";
import TabSelector from "./components/TabSelector/tap";
import ProgresBar from "./components/ProgresBar/bar.jsx";
import Gallery from "./components/ImageGalary/galary.jsx";
import Game from "./components/GamePicker/game.jsx";

function App() {
  return (
    <div className="wrapper container">
      <Counter />
      <MediaPost />
      <TabSelector />
      <ProgresBar />
      < Gallery />
      <Game />
    </div>
  );
}

export default App;
