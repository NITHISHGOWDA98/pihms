import React, { useState, useEffect } from "react";
import {
 
  faMoneyBill,
  faHospital,
 
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../NavBar/Header";
import Footer from "../../NavBar/Footer";
import "./newpatient.css";

export const NewPatient = () => {
  const [patientslist, setPatientslist] = useState([]);

  const [isSecondAPIDisplayed, setIsSecondAPIDisplayed] = useState(false);
  const [patientLimit, setPatientLimit] = useState("20");
  const [patientDuration, setpatientDuration] = useState("All");

  const [isLoading, setIsLoading] = useState(true);
  const [inputPatientData, setinputPatientData] = useState(null);

  useEffect(() => {
    const fetchPatientList = async () => {
      const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientList";

      try {
        const requestBody = {
          m_FilterOptions: {
            m_Type: 1,
            m_Limit: patientLimit,
            m_OrderBy: "id",
            m_Duration: patientDuration,
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
  return (
    <div className="newpatientmaincontainer">
      <Header />
      <div className="newpatientheader">
        <h1 style={{color:"#007bff"}}> New Patient Registration</h1>
      </div>
      <div className="newpatientcontent">
        <form className="newpatientform">
          <div className="labinp">
            <label htmlFor="salutation" className="input-label">
              Mobile :
            </label>
            <input
              type="text"
              id="salutation"
              name="salutation"
              className=" newpatientinput"
            />
          </div>

          <div className="labinp">
            <label className="input-label"> Patient Number :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className=" newpatientinput"
            />
          </div>

          <div className="labinp">
            <label htmlFor="lastName" className="input-label">
              E-Mail :
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className=" newpatientinput"
            />
          </div>

          <div className="labinp">
            <label htmlFor="maritalStatus" className="input-label">
              Occupation :
            </label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              className=" newpatientinput"
            />
          </div>

          <div className="labinp">
            <label htmlFor="religion" className="input-label">
              Honorific :
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              First Name :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="age" className="input-label">
              Last Name :
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Address :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Postal Code :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Gender :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Age :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>

          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Age Unit :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Date Of Birth :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              City :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              State :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Country :
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className=" newpatientinput"
            />
          </div>
        </form>
        <div className="register">
         <button className="registerbutton">Register</button>
        </div>

        <div className="newpatientpatientcontent">
          {isLoading ? (
              <div className="loading-container">
              <div className="loading">Loading...</div>
            </div>
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
                    <th scope="col">
                      {" "}
                      <FontAwesomeIcon icon={faRocket} /> Action Buttons
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!isSecondAPIDisplayed &&
                    patientslist.map((patient, index) => (
                      <tr key={patient.id} className="table-row">
                        <td>{index + 1}</td>
                        <td>{patient.patientNumber}</td>
                        <td>
                          {patient.honorific} {patient.firstName} -{" "}
                          {patient.age} {patient.ageUnit} - {patient.gender}
                        </td>
                        <td>{patient.createdDateTime}</td>
                        <td>{patient.phonePrimary}</td>
                        <td>
                          <div className="actionbuttons">
                            
                            <div className="actionbutton">
                              <FontAwesomeIcon
                                icon={faMoneyBill}
                                style={{ color: "#007bff" }}
                              />{" "}
                              OPBill
                            </div>
                            <div className="actionbutton">
                              {" "}
                              <FontAwesomeIcon
                                icon={faHospital}
                                style={{ color: "#007bff" }}
                              />
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
      </div>

      <Footer />
    </div>
  );
};
