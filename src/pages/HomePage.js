import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import MainLayout from "../layout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="row mb-3">
        <div className="col">
          <Login />
        </div>
      
        <div className="col">
          <Register />
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
