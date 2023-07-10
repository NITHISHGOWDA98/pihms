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
import { NewPatient } from "./Modules/Patient/NewPatient";

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
            <Route path="/pharmacy" element={<Pharmacy/>} />
            <Route path="/security" element={<Security/>} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/patient/newpatient" element={<NewPatient />} />


          </Route>
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
