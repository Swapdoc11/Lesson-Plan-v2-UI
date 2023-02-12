import React, { useContext, useState } from "react";

import Admin from "../components/Admin";

import Plan from "../components/Plan";
import { UserInformation } from "../context/AuthContext";

import Setting from "./Setting";

const Dashboard = () => {
  const { user } = useContext(UserInformation);
  console.warn(user);
  const [component, setComponent] = useState("Plan");

  return (
    <div className="mb-3">
      <nav className="navbar-nav bg-dark bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <div className="row">
            <div className="col">
              <button
                className="btn btn-dark"
                onClick={(e) => setComponent("Plan")}
              >
                Plan
              </button>
              {user.isAdmin ? (
                <button
                  className="btn btn-dark"
                  onClick={(e) => setComponent("Admin")}
                >
                  Admin Panel
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="col">
             
              <div style={{ float: "right" }}>
                <button
                  className="btn btn-dark"
                  onClick={(e) => setComponent("Setting")}
                >
                 Hi {user.name} 
                </button>
              </div>
              <div style={{ float: "right" }}>
                <button
                  className="btn btn-dark"
                  onClick={(e) => setComponent("Setting")}
                >
                 Setting
                </button>
              </div>
              <div style={{ float: "right" }}>
                &nbsp;
                <button
                  className="btn btn-dark"
                  onClick={(e) => setComponent("Logout")}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
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
  );
};

export default Dashboard;
