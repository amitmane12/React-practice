import { Routes, Route } from "react-router";
import "./App.css";
import CardIndex from "./projects/project1/CardIndex";
import UI from "./projects/project2/UI";
import Home from "./projects/Home/Home";
import UI_Solution from "./projects/project2-ans/UI_Solution";

function App() {
  return (
    <>
      {/* <CardIndex />; */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<CardIndex />} />
        <Route path="ui" element={<UI />} />
        <Route path="ui2" element={<UI_Solution />} />
      </Routes>
    </>
  );
}

export default App;
