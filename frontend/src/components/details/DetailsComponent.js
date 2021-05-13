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
import DividerPannel from './PanelComponent';

function DetailInfo() {
    /*
         the default canvas has to be divided into two canvases
    */
    let handleCompareButton = () => {
        alert('compare button clicked');
    };

    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);
    return (
        <React.Fragment>
            <h2>The chosen Model is {selectedProducts[0].modelName}</h2>
            <SelectVariable></SelectVariable>
            <DividerPannel onCompareClick={handleCompareButton}></DividerPannel>

            <Canvas></Canvas>
        </React.Fragment>
    );
}

export default DetailInfo;
