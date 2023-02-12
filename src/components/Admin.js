import React, { useState } from "react";
import AddClass from "./adminComponents/AddClass";
import AddDivision from "./adminComponents/AddDivision";
import AddInfo from "./adminComponents/AddInfo";
import AddSubject from "./adminComponents/AddSubject";

const Admin = () => {
  const [component, setComponent] = useState("add_subject");
  const handleClick = (e) => {
    setComponent(e.target.id);
  };
  return (
    <div className="container">
     
          
          &nbsp;
          <button
            className="btn btn-primary btn-lg"
            id="add_info"
            onClick={(e) => handleClick(e)}
          >
            + Add Information
          </button>
         &nbsp;
          <button
            className="btn btn-primary btn-lg"
            id="add_section"
            onClick={(e) => handleClick(e)}
          >
            + Add Section
          </button>
         &nbsp;
          <button
            className="btn btn-primary btn-lg"
            id="add_class"
            onClick={(e) => handleClick(e)}
          >
            + Add Class
          </button>
          &nbsp;
          <button
            className="btn btn-primary btn-lg"
            id="add_division"
            onClick={(e) => handleClick(e)}
          >
            + Add Division
          </button> &nbsp;
          <button
            className="btn btn-primary btn-lg "
            id="all_users"
            onClick={(e) => handleClick(e)}
          >
            All Users
          </button>
          &nbsp;
          <button
            className="btn btn-primary btn-lg"
            id="add_subject"
            onClick={(e) => handleClick(e)}
          >
            + Add Subject
          </button>
        
     
      <div className="row">
        {
          {
            add_subject: <AddSubject />,
            add_info:<AddInfo />,
            add_section:"Add Section",
            add_class: <AddClass />,
            add_division: <AddDivision />,
            all_users: "All User",
          }[component]
        }
      </div>
    </div>
  );
};

export default Admin;
