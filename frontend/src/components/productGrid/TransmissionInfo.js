import React from 'react';
import "./ProductGridIndex.css"

function TransmissionInfo() {
  return (
    <div class="w3-row w3-padding">
      <div class="w3-col m6 l6 w3-padding-small">
        <strong>
          Acting at the forefront of renewables and electrification
        </strong>
        <p>
        For the future of power transmission, there’s much to be excited about: 
        a rise in global demand, an increased focus on our environment, the 
        adaptation of digital solutions that optimize our performance and more.
        Creating a sustainable, digital, and stable transmission grid comes with
        challenges – challenges that our team at Siemens Energy is best equipped 
        for as your leading industry partner.
        </p>
      </div>
      <div class="w3-col m6 l6 w3-padding-small">
        <div class="w3-card-4">
          <img
            src="https://assets.siemens-energy.com/siemens/assets/api/uuid:e2e6f12202f09dcbb45ca93555d0457d2cde78d1/width:750/quality:high/gas-turbines.jpg"
            alt="Alps"
          />
          <div class="w3-container w3-center">
            <p>Transmission</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransmissionInfo;