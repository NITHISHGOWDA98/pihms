import React , { useState } from "react";
import "./patient.css";

import { Header } from "../../NavBar/Header";

export const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [inputPatientID, setInputPatientID] = useState("");

  const fetchPatientDetails = async () => {
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
        console.log("Fetched data:", data);
        setPatients([data.m_Patient]);
      } else {
        console.error("Failed to fetch patient details.");
      }
    } catch (error) {
      console.error("Error occurred while fetching patient details:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputPatientID(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPatientDetails();
  };

  return (
    <div className="paintentmaincontianer">
     
      <Header/>
       
     

      <form className="patientform" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputPatientID}
              onChange={handleInputChange}
              placeholder="Enter Patient ID"
              className="patientinput"
            />
            <button type="submit" className="patientinputbutton">Submit</button>
          </form>
      <div className="paintentcontent">
     
          <table className="table">
      <thead>
        <tr className="table-header">
          <th scope="col">Sl No</th>
          <th scope="col">Patient No</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Display Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Date Of Birth</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{patient.patientNumber}</td>
            <td>{patient.firstName}</td>
            <td>{patient.displayName}</td>
            <td>{patient.gender}</td>
            <td>{patient.dateOfBirth}</td>
            <td>{/* Action buttons here */}</td>
          </tr>
        ))}
      </tbody>
    </table>
        
      </div>
      </div>
   
  );
};
