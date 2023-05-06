import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import "./App.css";
import Board from "./components/Board";
import AgeCheck from "./components/AgeCheck";
import UnderAge from "./components/UnderAge";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeCheck />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:username" element={<Menu />} />
        <Route path="/menu/wild-beer-gaming/" element={<Board />} />
        <Route path="/menu/wild-beer-gaming/:username" element={<Board />} />
        <Route path="/mineur" element={<UnderAge />} />
      </Routes>
    </div>
  );
}

export default App;
