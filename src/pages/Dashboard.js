import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import AddPlan from "../components/AddPlan";
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
          <div className="col-sm-2">
            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("AddPlan")}
              >
                Add Plan
              </button>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("EditPlan")}
              >
                Edit Plan
              </button>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => setComponent("DeletePlan")}
              >
                Delete Plan
              </button>
            </div>
          </div>
          <div className="col">
            {
              {
                AddPlan: <AddPlan />,
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
