/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @author parham, 08.05
 */

import React, { Component, useContext } from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';

function DetailInfo() {
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);
    return (
        <React.Fragment>
            <h2>The chosen Model is {selectedProducts[0].modelName}</h2>
            <SelectVariable></SelectVariable>
            <div class='w3-panel w3-2019-bluestone w3-padding-16'>
                <h2 class='w3-opacity'>Canvas page</h2>
            </div>
            <Canvas></Canvas>
        </React.Fragment>
    );
}

export default DetailInfo;
