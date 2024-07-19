import "./App.css";
import Counter from "./components/Counter/counter";
import MediaPost from "./components/MediaPost/post";
import TabSelector from "./components/TabSelector/tap";

function App() {
  return (
    <div className="wrapper container">
      <Counter />
      <MediaPost />
      <TabSelector />
    </div>
  );
}

export default App;
