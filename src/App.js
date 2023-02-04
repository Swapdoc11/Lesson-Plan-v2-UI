import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AddPlan from "./components/AddPlan";


function App() {


  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addplan" element={<AddPlan />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
