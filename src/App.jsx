import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Details } from "./page/Details";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
