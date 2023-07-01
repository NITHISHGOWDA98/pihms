import React from "react";
import "./patientN.css";

export const PatientN = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " data-bs-theme="light">
        {/* <div className="container-fluid"> */}
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
            
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
             
            </li>
            <li className="nav-item dropdown">
             
                
              <div className="dropdown-menu">
              
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
};
