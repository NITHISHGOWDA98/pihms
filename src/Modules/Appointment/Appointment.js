import React from 'react'
import "./appointment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faHome, faReply } from "@fortawesome/free-solid-svg-icons";

export const Appointment = () => {
  return (
    <div className="appointmentmaincontianer">
      <div className="appointmentpatientheader">
        <ul className="appointmentlist">
          <li className="appointmentli">
            <FontAwesomeIcon icon={faRocket} /> QL
          </li>
          <li className="appointmentli">
            <FontAwesomeIcon icon={faHome}/> Main
          </li>
          <li className="appointmentli">
            <FontAwesomeIcon icon={faReply} /> Back
          </li>
        </ul>
      </div>
    </div>
  )
}
