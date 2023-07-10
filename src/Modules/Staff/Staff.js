import React, { useState, useEffect } from "react";
import { Header } from '../../NavBar/Header'
import Footer from '../../NavBar/Footer'
import {
  faHistory,
  faChevronDown,
 
  faTag,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Staff = () => {

    <Header/>
     const [patients, setPatients] = useState([]);
   const [selectedPatient, setSelectedPatient] = useState(null);
  const [inputInPatientID, setInputInPatientID] = useState("");
  const [isSecondAPIDisplayed, setIsSecondAPIDisplayed] = useState(false);
  const [selectedPatientData, setSelectedPatientData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [patientLimit, setPatientLimit] = useState("50");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPatientList = async () => {
      const apiUrl = "http://ganga.pihms.co.in/Staff/get_StaffList";

      try {
        const requestBody = {
          m_Filter: {
            m_Type: 5,
            m_Limit: patientLimit,
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
          setPatients(data.ml_StaffList);
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
    if (inputInPatientID) {
      const apiUrl = "http://ganga.pihms.co.in/OPBilling/get_OPBillDetail";

      try {
        const requestBody = {
          m_IPCaseID: inputInPatientID,
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
          setSelectedPatientData(data.m_OPBill);
          setIsSecondAPIDisplayed(true);
          setIsLoading(false); 
        } else {
          console.error("Failed to fetch patient details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient details:", error);
      }
    } else {
      setSelectedPatient(null);
      setIsSecondAPIDisplayed(false);
    }
  };

  const handleInputChange = (event) => {
    setInputInPatientID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPatientDetails();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (limit) => {
    setPatientLimit(limit);
    setSelectedOption(limit);

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
              {selectedOption ? <div> Recent {selectedOption}</div> : "Recent"}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "10px" }}
              />
            </div>
            {isOpen && (
              <div className="options">
                <div
                  className="option"
                  onClick={() => handleOptionClick("100")}
                >
                  Recent 100
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("200")}
                >
                  Recent 200
                </div>
                <div
                  className="option"
                  onClick={() => handleOptionClick("500")}
                >
                  Recent 500
                </div>
              </div>
            )}
          </div>
        </div>
        <form className="patientform" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputInPatientID}
            onChange={handleInputChange}
            placeholder="Enter Bill Number"
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
                <th scope="col">Staff Name</th>
                <th scope="col">Staff No</th>
                <th scope="col">Registration Date</th>
                
               
                <th scope="col">
                   Phone Primary
                </th>
              </tr>
            </thead>
            <tbody>
              {!isSecondAPIDisplayed &&
                patients.map((inpatient) => (
                  <tr
                    key={inpatient.id}
                    onClick={() => setSelectedPatient(inpatient)}
                    className="table-row"
                  >
                    <td>{inpatient.id}</td>
                    <td>{inpatient.displayName}</td>
                    <td>{inpatient.staffNumber}</td>
                    <td>{inpatient.dateOfJoining}</td>
                    <td>{inpatient.phonePrimary}</td>
                   
                  </tr>
                ))}

              {isSecondAPIDisplayed && selectedPatientData && (
                <tr className="table-row">
                  <td>{selectedPatientData.id}</td>
                  <td>{selectedPatientData.displayName}</td>
                  <td>{selectedPatientData.staffNumber}</td>
                  <td>{selectedPatientData.dateOfJoining}</td>
                  <td>{selectedPatientData.phonePrimary}</td>
                  <td>
                  <div className="actionbuttons">
                       
                        <div className="actionbutton">
                          <FontAwesomeIcon icon={faTag} style={{ color: "#007bff" }} /> Label
                        </div>
                      </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
         )}
 
      </div>
     
{/* 
      {isSecondAPIDisplayed && selectedPatient && (
        <div className="patientdetails">
          <h2>Patient Details</h2>
          <div>Selected Patient ID: {selectedPatient.id}</div>
          <div>Selected Patient Name: {selectedPatient.displayName}</div>
        </div>
      )} */}

      <Footer />
    </div>
  );
}
   