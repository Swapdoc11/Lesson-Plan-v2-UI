import React from "react";
import { Link } from "react-router-dom";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="mb-3">
      <nav className="navbar bg-dark bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Lesson Plan v2
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
