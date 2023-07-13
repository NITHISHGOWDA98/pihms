import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Header } from "../../NavBar/Header";
import Footer from "../../NavBar/Footer";
import "./patientdetails.css";
import { PatientVisit } from "./PatientVisit";
import { PatientHistory } from "./PatientHistory";
import { PatientDetailsTab } from "./PatientDetailsTab";

export const PatientDetails = () => {
  const { patientId } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("details");

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const apiUrl = "http://ganga.pihms.co.in/Patient/get_PatientDetail";

      try {
        const requestBody = {
          m_PatientID: patientId,
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
          setPatientData(data.m_Patient);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch patient details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient details:", error);
      }
    };
    fetchPatientDetails();
  }, [patientId]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <Header />
      <div className="patientdetailsconatainer">
        <div className="patientdetailsconatainerheader">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="patientdetailsconatainerheader1">
              <div className="patientdetailsconatainerheadercolumn">
                Name: {patientData.firstName}
              </div>
              <div className="patientdetailsconatainerheadercolumn">
                Age: {patientData.age}
              </div>
              <div className="patientdetailsconatainerheadercolumn">
                Patient no: {patientData.patientNumber}
              </div>
              <div className="patientdetailsconatainerheadercolumn">
                Phone no: {patientData.phonePrimary}
              </div>
            </div>
          )}
        </div>
        <div className="patientdetailsconatainerbuttons">

          <NavLink
            to="patientdetailstab"
            className={`patientdetailsconatainerbutton ${activeSection === "details" ? "active" : ""
              }`}
            onClick={() => handleSectionClick("details")}

          >
            Detail
          </NavLink>

          <NavLink
            to="patientvisit"
            className={`patientdetailsconatainerbutton visit ${activeSection === "visit" ? "active" : ""
              }`}
            onClick={() => handleSectionClick("visit")}
          >
            visit
          </NavLink>
          <NavLink
            to="patienthistory"
            className={`patientdetailsconatainerbutton ${activeSection === "history" ? "active" : ""
              }`}
            onClick={() => handleSectionClick("history")}
          >
            History
          </NavLink>

          <div className="patientdetailsconatainerbutton">Lab Report</div>
          <div className="patientdetailsconatainerbutton">Billing</div>
          <div className="patientdetailsconatainerbutton">Insurance</div>
          <div className="patientdetailsconatainerbutton">Birth Detail</div>
          <div className="patientdetailsconatainerbutton">Scanning report</div>
        </div>
        <div className="patientdetailsconatainerform">
          {activeSection === "details" && <PatientDetailsTab />}
          {activeSection === "visit" && <PatientVisit />}
          {activeSection === "history" && <PatientHistory />}
        </div>
      </div>
      <Footer />
    </div>
  );
};
