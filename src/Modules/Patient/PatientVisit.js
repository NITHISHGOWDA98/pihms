import React, { useState } from "react";
import "./patientvisit.css";
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PatientVisit = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };
  return (
    <div className="patientvisitmainconatainer">
      <div className="patientvisitleftconatainer">
        <div className="patientvisitleftconatainerheader">
          <h1>Visit Details</h1>
        </div>
        <div className="patientvisitleftconatainercontent">
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Visit Type:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Referred Doctor:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Reason For Visit:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Observation:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Advice:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Medications:
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
        </div>

        <div className='filesupload'>
        <div className='filesupload1'>
      <input type="file" onChange={handleFileChange} multiple />
      <p>Selected Files:</p>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
      </div>

          <div className="buttonsinpdt">
            <button className="buttoninpdt1">Cancel </button>
            <button className="buttoninpdt2">Save</button>
          </div>
        </div>
      </div>
      <div className="patientvisitrightconatainer">
        <div className="patientvisitrightconatainerheader">
          <h1>Visit List</h1>
        </div>
        <div className='patientvisitrightconatainercontent'>
      <div className='patientvisitrightconatainercontent1'>
      <FontAwesomeIcon icon={faPlus} />
        New 
       
      </div>
      <div className='patientvisitrightconatainercontent2'>
        <input type="text" placeholder="Search" className='patientvisitrightconatainercontent2input' />
      </div>
      <div className='patientvisitrightconatainercontent3'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
      </div>
    </div>
  );
};
