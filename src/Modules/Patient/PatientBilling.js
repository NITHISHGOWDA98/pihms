import React, { useState } from "react";
import "./patientbilling.css";

export const PatientBilling = () => {
  return (
    <div className="patientvisitmainconatainer">
      <div className="patientvisitleftconatainer">
        <div className="patientvisitleftconatainerheader">
          <h1>Billing Items</h1>
        </div>
        <div className="patientbillingheader">
          <div>Item Name</div>
          <div>Item Qty</div>
          <div>Item Unit Price</div>
          <div>Item Total Price</div>
        </div>
      </div>
      <div className="patientvisitrightconatainer">
        <div className="patientvisitrightconatainerheader">
          <h1>Billing List</h1>
        </div>
        <div className="patientbillingheaderright">
          <div>OP Bills</div>
        </div>
        <div className="patientbillingheaderrightbox"></div>
        <div className="patientbillingheaderright">
          <div>IP Bills</div>
        </div>
        <div className="patientbillingheaderrightbox"></div>
      </div>
      
    </div>
  );
};
