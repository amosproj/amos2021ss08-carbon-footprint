import React from 'react';
import "./ProductGridIndex.css"
import IndustrialImage from "assets/dummyImages/Industrialapplications.jpg" 

function IndustrialApplicationInfo() {
  return (
    <div class="w3-row w3-padding">
      <div class="w3-col m6 l6 w3-padding-small">
        <strong className='SubTitle'>
          Creating sustainable value throughout the decarbonization journey
        </strong>
        <p className='TextContent'>
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
            src= {IndustrialImage}
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