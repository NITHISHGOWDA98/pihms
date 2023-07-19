import React, {  useState } from "react";
import "./patientdetailstab.css";
import { useParams } from "react-router-dom";

export const PatientBirthDetail = () => {

  const [patientData, setPatientData] = useState(null);
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
            Baby Name:
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
            <label className="input-label">Date Of Birth:</label>
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
            Sex :
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
            Father Name:
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
            Father Occupation :
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
            Father Qualification :
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
            Mother Name:
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
            Mother Occupation :
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
            Mother Qualification :
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
            Age at time of Marriage:
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
            Age at Delivery:
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
            Order of giving Birth:
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
            Birth Weight:
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
            Birth Time:
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
            Kind of Delivery:
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
            Pregnancy Period:
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
            Native Place:
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
            IPCase Number:
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
            Kind of Medication:
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
         
        </form>
 
    </div>
  )
}

