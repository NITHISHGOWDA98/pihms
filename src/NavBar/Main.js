import React, { useState } from "react";
import "./main.css";
import { Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlaskVial,
  faCalendar,
  faComment,
  faStethoscope,
  faMoneyBillWave,
  faCog,
  faHospital,
  faUser,
  faBoxOpen,
  faClipboardList,
  faPrescriptionBottleAlt,
  faShieldAlt,
  faUsers,
  faBroom,
  faMoneyBill,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  const navigate = useNavigate();
  const [dropdownStatus, setDropdownStatus] = useState({});

  const toggleDropdown = (moduleName) => {
    setDropdownStatus((prevStatus) => ({
      ...prevStatus,
      [moduleName]: !prevStatus[moduleName],
    }));
  };

  const handleNavigation = (path, moduleName) => {
    toggleDropdown(moduleName);
    navigate(path);
  };

  const renderDropdownContent = (moduleName) => {
    return (
      dropdownStatus[moduleName] && (
        <div className="dropdown-content">
          <p>This is the dropdown content.</p>
        </div>
      )
    );
  };

  const Module = (path, moduleName, icon) => (
    <div className="modules">
      <p className="modules-p" onClick={() => handleNavigation(path, moduleName)}>
        <span className="modules-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="modules-title">{moduleName}</span>
        <span className="dropdown-icon">
          <FontAwesomeIcon icon={dropdownStatus[moduleName] ? faChevronUp : faChevronDown} />
        </span>
      </p>
      {renderDropdownContent(moduleName)}
    </div>
  );

  return (
    <div className="maincontainer">
      <div className="leftcontainer">
        <div className="leftcontainerheader">PI-HMS</div>
        <div className="modulelist">
          {Module("/appointment", "Appointment", faCalendar)}
          {Module("/communication", "Communication", faComment)}
          {Module("/diagnostic", "Diagnostic", faFlaskVial)}
          {Module("/doctorconsultation", "Consultation", faStethoscope)}
          {Module("/finance", "Finance", faMoneyBillWave)}
          {Module("/general", "General", faCog)}
          {Module("/housekeeping", "HouseKeeping", faBroom)}
          {Module("/inpatient", "InPatient", faHospital)}
          {Module("/inventory", "Inventory", faBoxOpen)}
          {Module("/masters", "Masters", faClipboardList)}
          {Module("/opbilling", "OpBilling", faMoneyBill)}
          {Module("/patient", "Patient", faUser)}
          {Module("/pharmacy", "Pharmacy", faPrescriptionBottleAlt)}
          {Module("/security", "Security", faShieldAlt)}
          {Module("/staff", "Staff", faUsers)}
        </div>
      </div>
      <div className="rightcontainer">
        <Outlet />
      </div>
    </div>
  );
};
