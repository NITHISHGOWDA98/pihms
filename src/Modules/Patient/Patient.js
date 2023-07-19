import React, { useState, useEffect } from "react";
import "./patient.css";
import {
  faHistory,
  faChevronDown,
  faMoneyBill,
  faHospital,
  faBox,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useNavigate ,Route } from "react-router-dom";
import { Header } from "../../NavBar/Header";
import Footer from "../../NavBar/Footer";
import { PatientDetails } from "./PatientDetails";

export const Patient = () => {
  const [patientslist, setPatientslist] = useState([]);
  const [inputPatientID, setInputPatientID] = useState("");
  const [isSecondAPIDisplayed, setIsSecondAPIDisplayed] = useState(false);
  const [inputPatientData, setinputPatientData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [patientLimit, setPatientLimit] = useState("50");
  const [patientDuration, setpatientDuration] = useState("All");
  const [isLoading, setIsLoading] = useState(true);


  <Route path="/patient/patientdetails/:patientId" element={<PatientDetails/>} />

  const navigate = useNavigate();
  const newpatientnavigate = useNavigate();
  const handleNavigation = (patientId) => {
   
    navigate(`/patient/patientdetails/${patientId}`);
  
  };
  const handlePatientNavigation = (path) => {
   
    
    newpatientnavigate(path);
  };


  useEffect(() => {
    const fetchPatientList = async () => {
      const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientList";

      try {
        const requestBody = {
          m_FilterOptions: {
            m_Type: 1 ,
            m_Limit: patientLimit,
            m_OrderBy: "id",
            m_Duration:patientDuration 
          },
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched patient list:", data);
          setPatientslist(data.ml_Patient);
          setIsLoading(false); 
        } else {
          console.error("Failed to fetch patient list.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient list:", error);
      }
    };

    fetchPatientList();
  }, [patientLimit]);

  const fetchPatientDetails = async () => {
    if (inputPatientID) {
      const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientDetail";

      try {
        const requestBody = {
          m_PatientID: inputPatientID,
        };

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched patient details:", data);
          setinputPatientData(data.m_Patient);
          setIsSecondAPIDisplayed(true);
          setIsLoading(false); 
        } else {
          console.error("Failed to fetch patient details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient details:", error);
      }
    } else {
     
      setIsSecondAPIDisplayed(false);
    }
  };

  const handleInputChange = (event) => {
    setInputPatientID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPatientDetails();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (limit,days,value) => {
    setPatientLimit(limit);
    setSelectedOption(value);
    setpatientDuration(days);

    setIsOpen(false);

    console.log(limit);
  };

  return (
    <div className="paintentmaincontianer">
      <Header />
      <div className="belowheader">
        <div className="belowheaderfilter">
          <div className="filter">
            <div className="selected-option" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faHistory} style={{ margin: "10px" }} />
              {selectedOption ? <div>  {selectedOption}</div> : "Recent"}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "10px" }}
              />
            </div>
            {isOpen && (
              <div className="options">
                 <div
                  className="option"
                  onClick={() => handleOptionClick("500","Current Week"," Current Week")}
                >
                  Current Week
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("500","Current Month","Current Month")}
                >
                  Current Month
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("100","All","Recent 100")}
                >
                  Recent 100
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("500","All","Recent 500")}
                >
                  Recent 500
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("1000","All","Recent 1000")}
                >
                  Recent 1000
                </div>
               
              </div>
            )}
          </div>
          <div className="newpatient" 
           onClick={() => handlePatientNavigation("/patient/newpatient")}
          >
          New patient
        </div>
        </div>
      
        <form className="patientform" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputPatientID}
            onChange={handleInputChange}
            placeholder="Enter Patient ID"
            className="patientinput"
          />
          <button type="submit" className="patientinputbutton">
            Search
          </button>
        </form>
      </div>

      <div className="patientcontent">
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead className="sticky-header">
              <tr className="table-header">
                <th scope="col">Sl No</th>
                <th scope="col">Patient No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Date of Registration</th>
                <th scope="col">Phone No</th>
                <th scope="col">  <FontAwesomeIcon icon={faRocket} />  Action Buttons</th>
              </tr>
            </thead>
            <tbody>
              {!isSecondAPIDisplayed &&
                patientslist.map((patient,index) => (
                  <tr
                    key={patient.id}
                    className="table-row"
                   
                  >
                    <td  onClick={() => handleNavigation(
                      patient.id )}>{index+1}</td>
                    <td  onClick={() => handleNavigation(
                      patient.id )}>{patient.patientNumber}</td>
                    <td  onClick={() => handleNavigation(
                      patient.id )}>
                      {patient.honorific} {patient.firstName} - {patient.age}{" "}
                      {patient.ageUnit} - {patient.gender}
                    </td>
                    <td>{patient.createdDateTime}</td>
                    <td>{patient.phonePrimary}</td>
                    <td>
                      <div className="actionbuttons">
                        <div className="actionbutton">
                          {" "}
                          <FontAwesomeIcon icon={faBox }  className="custom-icon"/> Package
                        </div>
                        <div className="actionbutton" onClick={() => handlePatientNavigation("/patient/opbillnew")}>
                        <FontAwesomeIcon icon={faMoneyBill} className="custom-icon" /> OPBill
                        </div>
                        <div className="actionbutton">
                          {" "}
                          <FontAwesomeIcon icon={faHospital}  className="custom-icon" />
                          IPCase
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}

              {isSecondAPIDisplayed && inputPatientData && (
                <tr className="table-row">
                  <td>{inputPatientData.id}</td>
                  <td>{inputPatientData.patientNumber}</td>
                  <td>
                    {inputPatientData.honorific}{" "}
                    {inputPatientData.firstName} - {inputPatientData.age}{" "}
                    {inputPatientData.ageUnit}
                  </td>
                  <td>{inputPatientData.createdDateTime}</td>
                  <td>{inputPatientData.phonePrimary}</td>
                  <td>{inputPatientData.dateOfBirth}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        )}
        
      </div>

     
      <Footer />
    </div>
  );
};
