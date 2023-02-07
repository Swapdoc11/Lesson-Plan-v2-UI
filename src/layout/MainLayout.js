import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userInfo } from "../pages/Dashboard";
const MainLayout = ({ children }) => {
  const { user } = useContext(userInfo);
  console.log(user);
  return (
    <>
      <div className="mb-3">
        <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Lesson Plan v2
            </Link>
            <Link className="navbar-brand" to="/plan">
              Plan
            </Link>
          </div>
        </nav>
        <br />
        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
