import PropTypes from 'prop-types';
import React from 'react';

/**
 * Displaying a label.
 *
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

LabelComponent.propTypes = {
    productName: PropTypes.string.isRequired
};

export default LabelComponent;
