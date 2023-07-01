import React, { useState } from "react";
import { PatientN } from "../../NavBar/PatientN";


export const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [inputPatientID, setInputPatientID] = useState("");

  const fetchPatientDetails = async () => {
    const proxyUrl = "http://localhost:8080/";
    const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientDetail";

    try {
      const endpoint = `${proxyUrl}${apiUrl}`;
      const requestBody = {
        m_PatientID: inputPatientID, // Use the inputPatientID value
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data to the console
        setPatients([data.m_Patient]); // Wrap the data in an array
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
    <div>
      <PatientN/>
      <div className="mt-1">
        <div className="container1">
          <form className="add_btn mt-2 mb-2" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputPatientID}
              onChange={handleInputChange}
              placeholder="Enter Patient ID"
            />
            <button type="submit">Submit</button>
          </form>

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">Sl No</th>
                <th scope="col">Patient No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">displayName</th>
                <th scope="col">gender</th>
                <th scope="col">Date Of Birth</th>
               
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, m_PatientID) => (
                <tr key={m_PatientID}>
                  <td>{m_PatientID + 1}</td>
                  <td>{patient.patientNumber}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.displayName}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.dateOfBirth}</td>
                  <td>
                    {/* Action buttons here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
