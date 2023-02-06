import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout";

import MainLayout from "../layout/MainLayout";

const HomePage = () => {
  return (
    <AuthLayout>

      <div className="row mb-3">
        <div className="col">
          <Login  />
        </div>

        <div className="col">
          <Register />
        </div>
      </div>
    </AuthLayout>
    
  );
};

export default HomePage;
