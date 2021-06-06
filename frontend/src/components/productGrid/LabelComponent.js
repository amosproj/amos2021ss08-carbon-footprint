import React from 'react';
import theme from 'resources/theme';

/**
 * Displaying a label.
 *
 * @author Mani Anand, Martin Wagner
 */

function LabelComponent({ productName }) {
    return (
        <span className='LabelTextContent'>
            {productName}
        </span>
    );
}

export default LabelComponent;
