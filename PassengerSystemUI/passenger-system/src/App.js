import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginScreen";
import Passenger from "./pages/PassengerScreen";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </div>
  );
}

export default App;
