import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={<Appointment></Appointment>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
