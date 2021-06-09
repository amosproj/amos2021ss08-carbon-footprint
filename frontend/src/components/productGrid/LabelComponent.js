import React from 'react';

/**
 * Displaying a label.
 *
 * @author Mani Anand, Martin Wagner
 */

function LabelComponent({ productName }) {
    return <span className='LabelTextContent'>{productName}</span>;
}

export default LabelComponent;
