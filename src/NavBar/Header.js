import React from 'react'
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faHome, faReply } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <div className="patientheader">
            <ul className="patientheaderlist">
            <li className="patientli">
                <FontAwesomeIcon icon={faRocket} /> QL
            </li>
            <li className="patientli">
                <FontAwesomeIcon icon={faHome} /> Main
            </li>
            <li className="patientli">
                <FontAwesomeIcon icon={faReply} /> Back
            </li>
        </ul>
        </div>
    )
}
