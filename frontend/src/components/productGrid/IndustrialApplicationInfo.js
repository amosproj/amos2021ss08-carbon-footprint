import React from 'react';
import './ProductGridIndex.css';
import IndustrialImage from 'assets/dummyImages/Industrialapplications.jpg';

function IndustrialApplicationInfo() {
    return (
        <div className='w3-row w3-padding'>
            <div className='w3-col m6 l6 w3-padding-small'>
                <strong className='SubTitle'>
                    Creating sustainable value throughout the decarbonization journey
                </strong>
                <p className='TextContent'>
                    The industrial sector accounts for approximately 37 percent* of all energy used
                    worldwide and a large share of global CO₂ emissions. Our Industrial Applications
                    division plays a crucial role in helping customers transition to a lower-carbon
                    world that protects our health and environment without compromising
                    competitiveness, efficiency, safety, and reliability.It is committed to serving
                    diverse industrial markets by delivering innovative products, solutions, and
                    services that address environmental, societal, and financial concerns. The
                    transition to a low-carbon future is a journey with many steps. It will take
                    time and require a range of both mature and emerging technologies. We help our
                    customers navigate this dynamic journey by providing a strong portfolio of
                    Rotating equipment, a full suite of services for that equipment, and Electrical,
                    Automation, and Digitalization solutions, systems, and services.
                </p>
            </div>
            <div className='w3-col m6 l6 w3-padding-small'>
                <div className='w3-card-4 imageTitle'>
                    <img src={IndustrialImage} alt='Industry' />
                    <div className='w3-container w3-center'>
                        <p>Industrial Application</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustrialApplicationInfo;
