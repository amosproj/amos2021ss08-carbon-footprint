import React from 'react';
import "./ProductGridIndex.css"

function IndustrialApplicationInfo() {
  return (
    <div class="w3-row w3-padding">
      <div class="w3-col m6 l6 w3-padding-small">
        <strong>
          Creating sustainable value throughout the decarbonization journey
        </strong>
        <p>
        The industrial sector accounts for approximately 37 percent* of all energy
         used worldwide and a large share of global CO₂ emissions. Our Industrial
         Applications division plays a crucial role in helping customers transition
         to a lower-carbon world that protects our health and environment without 
         compromising competitiveness, efficiency, safety, and reliability.
        </p>
      </div>
      <div class="w3-col m6 l6 w3-padding-small">
        <div class="w3-card-4">
          <img
            src="https://assets.siemens-energy.com/siemens/assets/api/uuid:e2e6f12202f09dcbb45ca93555d0457d2cde78d1/width:750/quality:high/gas-turbines.jpg"
            alt="Alps"
          />
          <div class="w3-container w3-center">
            <p>Industrial Application</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrialApplicationInfo;