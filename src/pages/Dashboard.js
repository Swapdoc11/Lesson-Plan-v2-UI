import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Admin from "../components/Admin";

import Plan from "../components/Plan";
import Subjects from "../components/Subjects";
import Setting from "./Setting";

export const userInfo = createContext();
const Dashboard = () => {
  const user = useLocation();
  console.log(user.state.userData);
  const [component, setComponent] = useState("Plan");

  return (
    <userInfo.Provider value={{ user: user.state.userData }}>
      <div className="mb-3">
        <nav
          className="navbar-nav navbar-expand-lg bg-dark bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container">
            <button
              className="btn btn-dark"
              onClick={(e) => setComponent("Plan")}
            >
              Plan
            </button>
            {user.state.userData.details.isAdmin ? (
              <button
                className="btn btn-dark"
                onClick={(e) => setComponent("Admin")}
              >
                Admin Panel
              </button>
            ) : (
              ""
            )}
            <button
              className="btn btn-dark"
              onClick={(e) => setComponent("Setting")}
            >
              Setting
            </button>
          </div>
        </nav>
        <br />
        <div className="container">
          {
            {
              Setting: <Setting />,
              Admin: <Admin />,
              Plan: <Plan />,
            }[component]
          }
        </div>
      </div>
    </userInfo.Provider>
  );
};

export default Dashboard;
