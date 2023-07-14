import React, { useState } from 'react';
import "./patientvisit.css";
export const PatientVisit = () => {

  
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);}
  return (
    <div className='patientvisitmainconatainer'>
      <div className='patientvisitleftconatainer'>
      <div className='patientvisitleftconatainerheader'>

       <h1>Visit Details</h1>
      </div>
      <div className='patientvisitleftconatainercontent'>
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
      
      <div>
      <input type="file" onChange={handleFileChange} multiple />
      <p>Selected Files:</p>
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>

      </div>
      <div className='patientvisitrightconatainer'>
        right
      </div>
     
    </div>
   
  )
}


