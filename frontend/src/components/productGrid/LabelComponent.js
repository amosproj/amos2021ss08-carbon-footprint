import React from 'react';

/**
 * Displaying a label.
 *
 * @author Mani Anand, Martin Wagner
 */

function LabelComponent({ productName }) {
    return (
        <span className='LabelTextContent w3-container w3-center w3-lightgrey w3-margin-bottom:2em  w3-margin-top'>
            {productName}
        </span>
    );
}

export default LabelComponent;
