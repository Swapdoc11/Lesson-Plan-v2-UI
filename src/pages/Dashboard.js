import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

import DeletePlan from "../components/DeletePlan";
import EditPlan from "../components/EditPlan";

import MainLayout from "../layout/MainLayout";

export const userInfo = createContext();
const Dashboard = () => {
  const user = useLocation();
  const [component, setComponent] = useState("AddPlan");

  return (
    <userInfo.Provider value={{ user: user.state.userData, color: "red" }}>
      <MainLayout>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("AddPlan")}
              >
                Add Plan
              </button> &nbsp;
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("EditPlan")}
              >
                Edit Plan
              </button>&nbsp;
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("DeletePlan")}
              >
                Delete Plan
              </button>
            </div>
            <div className="mb-3">
              
            </div>
            <div className="mb-3">
             
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col">
            {
              {
               // AddPlan: <AddPlan />,
                EditPlan: <EditPlan />,
                DeletePlan: <DeletePlan />
              }[component]
            }
          </div>
        </div>
      </MainLayout>
    </userInfo.Provider>
  );
};

export default Dashboard;
