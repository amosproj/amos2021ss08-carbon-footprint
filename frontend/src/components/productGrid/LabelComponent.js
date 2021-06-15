import React from 'react';

/**
 * Displaying a label.
 *
 * @author Mani Anand, Martin Wagner
 */

function LabelComponent({ productName }) {
    const returningProductName =
        productName.length > 24 ? productName.substring(0, 24 - 3) + '...' : productName;

    return (
        <span title={productName} className='LabelTextContent'>
            {returningProductName}
        </span>
    );
}

export default LabelComponent;
