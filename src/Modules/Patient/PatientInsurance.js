import React, { useState } from "react";
import "./patientinsurance.css";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const PatientInsurance = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };
  return (
    <div className="patientvisitmainconatainer">
      <div className="patientvisitleftconatainer">
        <div className="patientvisitleftconatainerheader">
          <h1>Insurance Details of Selected Insurance</h1>
        </div>
        <div className="patientinsuranceleftconatainercontent">
          <div>
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Policy Number:
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
              Plan Number :
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
              Effective Date :
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
              Expiry Date :
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
              Insurance Name :
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
              Insurer Name In Policy :
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
              Address :
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
              City :
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
              State :
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
              Country :
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
          <div className=" labinppv">
            <label htmlFor="religion" className="input-labelpv">
              Insurance Name :
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
            Postal Code :


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
            Relation Name :
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
            Relation Address:
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
            Relation City :
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
            Relation State :
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
            Relation Country :
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
            Relation Phone :
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
            Special Notes :
            </label>
            <input
              type="text"
              id="religion"
              name="religion"
              className="patientinputpv"
            />
          </div>
          </div>
        </div>

        <div className="filesupload">
          

          <div className="buttonsinpdt">
            <button className="buttoninpdt1">Cancel </button>
            <button className="buttoninpdt2">Save</button>
          </div>
        </div>
      </div>
      <div className="patientvisitrightconatainer">
        <div className="patientvisitrightconatainerheader">
          <h1>History List</h1>
        </div>
        <div className="patientvisitrightconatainercontent">
          <div className="patientvisitrightconatainercontent1">
            <FontAwesomeIcon icon={faPlus} />
            New
          </div>
          <div className="patientvisitrightconatainercontent2">
            <input
              type="text"
              placeholder="Search"
              className="patientvisitrightconatainercontent2input"
            />
          </div>
          <div className="patientvisitrightconatainercontent3">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <div  className="patientvisitrightconatainercontentbelowheader">
          <div> INSURANCE NAME</div>
          <div> 	Name In Policy</div>

        </div>
      </div>
    </div>
  );
};
