import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

import Plan from "./components/Plan"
import Update from "./pages/Update";

function App() {
 
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/update" element={<Update/>} />
        </Routes>

      </BrowserRouter>
  );
}

export default App;
