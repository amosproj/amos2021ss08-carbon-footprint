import React from 'react';
import './ProductGridIndex.css';
import TransmissionImage from 'assets/dummyImages/powerTransmission.jpg';

function TransmissionInfo() {
  return (
    <div class="w3-row w3-padding">
      <div class="w3-col m6 l6 w3-padding-small">
        <strong className='SubTitle'>
          Acting at the forefront of renewables and electrification
        </strong>
        <p className='TextContent'>
        For the future of power transmission, there’s much to be excited about: 
        a rise in global demand, an increased focus on our environment, the 
        adaptation of digital solutions that optimize our performance and more.
        Creating a sustainable, digital, and stable transmission grid comes with
        challenges – challenges that our team- Carbon Footprint Visualization at 
        Siemens is best equipped for as your leading industry partner.
        We meet the rising global demand for electricity by maintaining reliable
        power supply with interconnected grids, load balancing and power flow 
        management – increasing both transmission capacity and efficiency for a 
        stabilized grid. We contribute to making energy greener by connecting 
        renewables reliably and with lowest losses, bridging long distances 
        from generation to where energy is needed. We open the door to a world 
        of opportunity by adopting and fostering digital solutions. Through our 
        digitalization transformation, we use advanced intelligence that enhances 
        productivity, optimizes performance, and protects your assets with extended 
        cybersecurity.
        </p>
      </div>
      <div class="w3-col m6 l6 w3-padding-small">
        <div class="w3-card-4">
          <img
            src= {TransmissionImage}
            alt='Transmission'
          />
          <div class="w3-container w3-center">
            <p>Transmission</p>
          </div>
        </div>
    );
}

export default TransmissionInfo;
