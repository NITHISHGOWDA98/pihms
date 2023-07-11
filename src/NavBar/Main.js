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
   
  switch (moduleName) {
    case "Appointment":
      return (
        dropdownStatus[moduleName] && (
        <div className="dropdown-content">
          <p onClick={() => handleNavigation("/appointment/new")}>New Appointment</p>
          <p onClick={() => handleNavigation("/appointment/view")}>View Appointments</p>
        </div>
      ));
    case "Communication":
      return (
        dropdownStatus[moduleName] && (
        <div className="dropdown-content">
          <p onClick={() => handleNavigation("/communication/compose")}>Compose Message</p>
          <p onClick={() => handleNavigation("/communication/inbox")}>Inbox</p>
          <p onClick={() => handleNavigation("/communication/sent")}>Sent Messages</p>
        </div>
      ));
      case "Patient":
        return (
          dropdownStatus[moduleName] && (
          <div className="dropdown-content">
            <p onClick={() => handleNavigation("/patient/newpatient")}>New Patient</p>
           
          </div>
        ));
    // should add more cases for other modules incomplete cases due to less inforamtion

    default:
      return null;
  }
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
