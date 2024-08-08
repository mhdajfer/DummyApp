import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  console.log("client ");
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
