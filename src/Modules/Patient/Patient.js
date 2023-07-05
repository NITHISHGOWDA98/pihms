import React, { useState, useEffect } from "react";
import "./patient.css";
import { faHistory, faAngleDown, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../NavBar/Header";

export const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [inputPatientID, setInputPatientID] = useState("");
  const [isSecondAPIDisplayed, setIsSecondAPIDisplayed] = useState(false);
  const [selectedPatientData, setSelectedPatientData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetchPatientList();
  }, []);

  const fetchPatientList = async () => {
    const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientList";

    try {
      const requestBody = {
        m_FilterOptions: {
          m_Type: 5,
          m_Limit: "100",
          m_OrderBy: "id",
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
        setPatients(data.ml_Patient);
      } else {
        console.error("Failed to fetch patient list.");
      }
    } catch (error) {
      console.error("Error occurred while fetching patient list:", error);
    }
  };

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
          setSelectedPatientData(data.m_Patient);
          setIsSecondAPIDisplayed(true);
        } else {
          console.error("Failed to fetch patient details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient details:", error);
      }
    } else {
      // No input provided, display first API data
      setSelectedPatient(null && inputPatientID === ' ');
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

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="paintentmaincontianer">
      <Header />
      <div className="belowheader">
        <div className="belowheaderfilter">

          <div className="filter">
            <div className="selected-option" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faHistory} />
              {selectedOption ? (
                <div>
                 
                  {selectedOption}
                </div>
              ) : (
                'Recent'
              )}
              <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '10px' }} />
            </div>

            {isOpen && (
              <div className="options">
               
                <div className="option" onClick={() => handleOptionClick('Option 1')}>
                 
                  Option 1
                </div>
                <div className="option" onClick={() => handleOptionClick('Option 2')}>
                  Option 2
                </div>
                <div className="option" onClick={() => handleOptionClick('Option 3')}>
                  Option 3
                </div>
              </div>
            )}
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
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th scope="col">Sl No</th>
                <th scope="col">Patient No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Date of Registration</th>
                <th scope="col">Phone No</th>
                <th scope="col">Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              {!isSecondAPIDisplayed && patients.map((patient) => (
                <tr
                  key={patient.id}
                  onClick={() => setSelectedPatient(patient)}
                >
                  <td>{patient.id}</td>
                  <td>{patient.patientNumber}</td>
                  <td>{patient.honorific} {patient.firstName} - {patient.age} {patient.ageUnit} {patient.gender}</td>
                  <td>{patient.createdDateTime}</td>
                  <td>{patient.phonePrimary}</td>
                  <td>{patient.dateOfBirth}</td>
                </tr>
              ))}

              {isSecondAPIDisplayed && selectedPatientData && (
                <tr>
                  <td>{selectedPatientData.id}</td>
                  <td>{selectedPatientData.patientNumber}</td>
                  <td>{selectedPatientData.honorific} {selectedPatientData.firstName} - {selectedPatientData.age} {selectedPatientData.ageUnit}</td>
                  <td>{selectedPatientData.createdDateTime}</td>
                  <td>{selectedPatientData.phonePrimary}</td>
                  <td>{selectedPatientData.dateOfBirth}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isSecondAPIDisplayed && selectedPatient && (
        <div className="patientdetails">
          <h2>Patient Details</h2>
          <div>Selected Patient ID: {selectedPatient.id}</div>
          <div>Selected Patient Name: {selectedPatient.displayName}</div>
          {/* Add more details as per your requirement */}
        </div>
      )}
    </div>
  );
};