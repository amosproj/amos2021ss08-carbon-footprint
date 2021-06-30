import React from 'react';
import './ProductGridIndex.css';
import GenerationImage from 'assets/dummyImages/powerGeneration.jpg';
import TransmissionImage from 'assets/dummyImages/powerTransmission.jpg';
import IndustrialImage from 'assets/dummyImages/Industrialapplications.jpg';

function CategoryIndex() {
    return (
        <div className='w3-row w3-padding '>
            <div className='w3-col w3-padding-small w3-padding-top'>
                <strong className='SubTitle'>Our Offerings</strong>
                <p className='TextContent'>
                    Meeting the growing global energy demand while transitioning to a more
                    sustainable world requires a complex journey. But you're not without a partner.
                    At Siemen's Carbon Visualization, we work closely with our customers to drive
                    the energy transition, step by step, with our rich history of innovative
                    technology,extensive energy experience and ambitious strategy to drive the
                    decarbonization of global energy systems.
                </p>
            </div>
            <div className='w3-row m6 32 w3-padding-small'>
                <div className='w3-third imageTitle w3-animate-zoom'>
                    <img src={GenerationImage} alt='Generation' />
                    <div className='w3-container w3-center'>
                        <p>Generation</p>
                    </div>
                </div>
                <div className='w3-third imageTitle w3-animate-zoom'>
                    <img src={IndustrialImage} style={{height:"396.55px"}} alt='Industry' />
                    <div className='w3-container w3-center'>
                        <p>Industrial Application</p>
                    </div>
                </div>
                <div className='w3-third imageTitle w3-animate-zoom'>
                    <img src={TransmissionImage} alt='Transmission' />
                    <div className='w3-container w3-center'>
                        <p>Transmission</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryIndex;
