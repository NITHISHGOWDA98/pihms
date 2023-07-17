import React, { useEffect, useState } from "react";
import "./patientdetailstab.css";
import { useParams } from "react-router-dom";

export const PatientDetailsTab = () => {
  const { patientId } = useParams();
  const [patientData, setPatientData] = useState(null);


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
         
        } else {
          console.error("Failed to fetch patient details.");
        }
      } catch (error) {
        console.error("Error occurred while fetching patient details:", error);
      }
    };

    fetchPatientDetails();
  }, [patientId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="containerpatientDetailsTab">
     
        <form className="patientform">
          <div className="labinp">
            <label htmlFor="salutation" className="input-label">
              Salutation:
            </label>
            <input
              type="text"
              id="salutation"
              name="salutation"
              className="patientinput"
              value={patientData?.honorific || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="labinp">
            <label className="input-label">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="patientinput"
              value={patientData?.firstName || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="labinp">
            <label htmlFor="lastName" className="input-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="patientinput"
              value={patientData?.lastName || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="labinp">
            <label htmlFor="maritalStatus" className="input-label">
              Marital Status :
            </label>
            <input
              type="text"
              id="maritalStatus"
              name="maritalStatus"
              className="patientinput"
              value={patientData?.maritalStatus || ""}
              onChange={handleInputChange}
            />
          </div>

          <div className="labinp">
            <label htmlFor="religion" className="input-label">
              Religion :
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinput"
              value={patientData?.religion || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="gender" className="input-label">
              Gender:
            </label>
            <input
              type="text"
              id="gender"
              name="gender"
              className="patientinput"
              value={patientData?.gender || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="age" className="input-label">
              Age :
            </label>
            <input
              type="text"
              id="age"
              name="age"
              className="patientinput"
              value={patientData?.age || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="ageUnit" className="input-label">
              Age Unit :
            </label>
            <input
              type="text"
              id="ageUnit"
              name="ageUnit"
              className="patientinput"
              value={patientData?.ageUnit || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="dateOfBirth" className="input-label">
              DOB :
            </label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              className="patientinput"
              value={patientData?.dateOfBirth || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="occupation" className="input-label">
              Occupation :
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="patientinput"
              value={patientData?.occupation || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
              Monthly Income :
            </label>
            <input
              type="text"
              id="incomeRange"
              name="incomeRange"
              className="patientinput"
              value={patientData?.incomeRange || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="phonePrimary" className="input-label">
              Mobile :
            </label>
            <input
              type="text"
              id="phonePrimary"
              name="phonePrimary"
              className="patientinput"
              value={patientData?.phonePrimary || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="phoneSecondary" className="input-label">
            Phone :
            </label>
            <input
              type="text"
              id="phoneSecondary"
              name="phoneSecondary"
              className="patientinput"
              value={patientData?.phoneSecondary || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            E-Mail :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="patientinput"
              value={patientData?.email || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Address :
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="patientinput"
              value={patientData?.address || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Postal Code :
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              className="patientinput"
              value={patientData?.postalCode || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Emergency Contact Name :
            </label>
            <input
              type="text"
              id="emergencyContactName"
              name="emergencyContactName"
              className="patientinput"
              value={patientData?.emergencyContactName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Emergency Contact Phone :
            </label>
            <input
              type="text"
              id="emergencyContactPhone"
              name="emergencyContactPhone"
              className="patientinput"
              value={patientData?.emergencyContactPhone || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Emergency Contact Email:
            </label>
            <input
              type="text"
              id="emergencyContactEmail"
              name="emergencyContactEmail"
              className="patientinput"
              value={patientData?.emergencyContactEmail || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            City :
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="patientinput"
              value={patientData?.city || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            State :
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="patientinput"
              value={patientData?.state || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Country :
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="patientinput"
              value={patientData?.country || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Emg.Contact Relationship :
            </label>
            <input
              type="text"
              id="emergencyContactRelationship"
              name="emergencyContactRelationship"
              className="patientinput"
              value={patientData?.emergencyContactRelationship || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Referring Doctor :
            </label>
            <input
              type="text"
              id="referenceDoctor"
              name="referenceDoctor"
              className="patientinput"
              value={patientData?.referenceDoctor || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="labinp">
            <label htmlFor="incomeRange" className="input-label">
            Family Doctor:
            </label>
            <input
              type="text"
              id="familyDoctor"
              name="familyDoctor"
              className="patientinput"
              value={patientData?.familyDoctor || ""}
              onChange={handleInputChange}
            />
          </div>
        </form>
 
    </div>
  );
};
