import React from "react";
import "./patient.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faHome, faReply } from "@fortawesome/free-solid-svg-icons";

export const Patient = () => {
  return (
    <div className="paintentmaincontianer">
      <div className="patientheader">
        <ul className="list">
          <li>
            <FontAwesomeIcon icon={faRocket} /> QL
          </li>
          <li>
            <FontAwesomeIcon icon={faHome}/> Main
          </li>
          <li>
            <FontAwesomeIcon icon={faReply} /> Back
          </li>
        </ul>
      </div>
    </div>
  );
};
