// App.js
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./NavBar/Main";
import { InPatient } from "./Modules/InPatient/InPatient";
import { Patient } from "./Modules/Patient/Patient";
import { Appointment } from "./Modules/Appointment/Appointment";
import { Communication } from "./Modules/Communication/Communication";
import { Diagnostic } from "./Modules/Diagnostic/Diagnostic";
import { DoctorConsultation } from "./Modules/DoctorConsultation/DoctorConsultation";
import { Finance } from "./Modules/Finance/Finance";
import { General } from "./Modules/Genral/General";
import { HouseKeeping } from "./Modules/HouseKeeping/HouseKeeping";
import { Inventory } from "./Modules/Inventory/Inventory";
import { Masters } from "./Modules/Masters/Masters";
import { OpBilling } from "./Modules/OpBilling/OpBilling";
import { Pharmacy } from "./Modules/Pharmacy/Pharmacy";
import { Security } from "./Modules/Securtiy/Security";
import { Staff } from "./Modules/Staff/Staff";
import { InPatientDetails } from "./Modules/InPatient/InPatientDetails";
import { OpBillingDetails } from "./Modules/OpBilling/OpBillingDetails";
import { StaffDetails } from "./Modules/Staff/StaffDetails";
import {PatientVisit} from "./Modules/Patient/PatientVisit";
import { PatientDetails } from "./Modules/Patient/PatientDetails";
import { PatientHistory } from "./Modules/Patient/PatientHistory";
import { PatientDetailsTab } from "./Modules/Patient/PatientDetailsTab";
import { PatientLabDetails } from "./Modules/Patient/PatientLabDetails";
import { PatientBilling } from "./Modules/Patient/PatientBilling";
import { PatientInsurance } from "./Modules/Patient/PatientInsurance";
import { PatientBirthDetail } from "./Modules/Patient/PatientBirthDetail";
import { NewPatient } from "./Modules/Patient/NewPatient";
import { OPBillNew } from "./Modules/Patient/OPBillNew";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route element={<Main />}>
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route
              path="/doctorconsultation"
              element={<DoctorConsultation />}
            />
            <Route path="/finance" element={<Finance />} />
            <Route path="/general" element={<General />} />
            <Route path="/housekeeping" element={<HouseKeeping />} />
            <Route path="/inpatient" element={<InPatient />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/masters" element={<Masters/>} />
            <Route path="/opbilling" element={<OpBilling />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/patient/newpatient" element={<NewPatient/>} />
            <Route path="/patient/opbillnew" element={<OPBillNew />} />

            <Route path="/patient/patientdetails/:patientId" element={<PatientDetails/>} >
         
           <Route path="patientvisit" element={<PatientVisit />} />
           <Route path="patienthistory" element={<PatientHistory/>} />
           <Route path="patientlabdetails" element={<PatientLabDetails/>} />
           <Route path="patientbilling" element={<PatientBilling/>} />
           <Route path="patientinsurance" element={<PatientInsurance/>} />
           <Route path="patientbirthdetails" element={<PatientBirthDetail/>} />
           <Route path="patientdetailstab" element={<PatientDetailsTab/>} />
           <Route path="patientscanningreport" element={<PatientDetailsTab/>} />

         </Route>
            <Route path="/pharmacy" element={<Pharmacy/>} />
            <Route path="/security" element={<Security/>} />
            <Route path="/staff" element={<Staff />} />

           
            <Route path="/inpatient/inpatientdetails/:inpatientcaseId" element={<InPatientDetails/>} />
            <Route path="/opbilling/opbillingdetails/:opbillid" element={<OpBillingDetails />} />
            <Route path="/staff/staffdetails/:staffid" element={<StaffDetails/>} />


          </Route>
          
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
