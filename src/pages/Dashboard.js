import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

import Plan from "../components/Plan";
import MainLayout from "../layout/MainLayout";

export const userInfo = createContext();
const Dashboard = () => {
  const user = useLocation();
  const [component, setComponent] = useState("AddPlan");
  console.log(user);
  return (
    <userInfo.Provider value={{ user: user.state.userData }}>
      <MainLayout>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("Plan")}
              >
                Plan
              </button>
              &nbsp;
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {
              {
                Plan: <Plan />,
              }[component]
            }
          </div>
        </div>
      </MainLayout>
    </userInfo.Provider>
  );
};

export default Dashboard;
