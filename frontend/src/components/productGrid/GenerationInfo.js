import React from 'react';
import "./ProductGridIndex.css"
import GenerationImage from "assets/dummyImages/powerGeneration.jpg" 



function GenerationInfo() {
    return (
        <div className="w3-row w3-padding">
            <div className="w3-col m6 l6 w3-padding-small">
                <strong className='SubTitle'>
                Utilizing conventional and renewable energy sources efficiently
                </strong>
                <p className='TextContent'>
                Urbanization, scarce resources, and climate change: Wherever we look,
                global challenges are spurring a demand for increasingly efficient
                power generation products, solutions, and services. Trends like
                digitalization open up a variety of opportunities within the energy
                business. Harness the potential of change. Gain competitive advantages
                – with the help of our in-depth expertise and state-of-the-art
                products and services. With these, we are helping our customers to
                successfully meet their challenges. Whether we’re talking about
                conventional or renewable energy: We know every market environment and
                their particular economic and ecological requirements. Put your trust
                in forward-thinking power generation from Siemens Energy – worldwide.
                </p>
            </div>
            <div class="w3-col m6 l6 w3-padding-small">
                <div class="w3-card-4">
                <img
                    src= {GenerationImage}
                />
                <div class="w3-container w3-center">
                    <p>Generation</p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default GenerationInfo;
