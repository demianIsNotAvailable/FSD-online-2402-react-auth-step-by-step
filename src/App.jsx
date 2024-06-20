import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {


  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App;
