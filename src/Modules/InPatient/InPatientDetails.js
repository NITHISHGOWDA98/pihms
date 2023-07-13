import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../NavBar/Header';
import Footer from '../../NavBar/Footer';
import "./inpatientdetails.css";

export const InPatientDetails = () => {
  const { inpatientcaseId } = useParams();
  const [patientData, setPatientData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPatientDetails = async () => {
    const apiUrl = "http://ganga.pihms.co.in/InPatient/get_IPCaseDetail";

    try {
      const requestBody = {
        m_IPCaseID: inpatientcaseId,
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
        setPatientData(data.m_IPCase);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch patient details.");
      }
    } catch (error) {
      console.error("Error occurred while fetching patient details:", error);
    }
  };

  useEffect(() => {
    fetchPatientDetails();
  }, []);

  return (
    <div>
      <Header />
      <div className='patientdetailsconatainer'>
        <div className='patientdetailsconatainerheader'>
          <div className='patientdetailsconatainerheader1'>
           
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
         
                <div  className='patientdetailsconatainerheadercolumn'>Name :-{patientData.name}
                </div>
                <div className='patientdetailsconatainerheadercolumn'>Age :-{patientData.age}</div>
                <div className='patientdetailsconatainerheadercolumn'>Patient no :- {patientData.ipCaseNumber}</div>
                <div className='patientdetailsconatainerheadercolumn'>Phone no :- {patientData.phone}</div>
               
               
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
