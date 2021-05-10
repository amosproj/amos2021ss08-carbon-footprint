/**
 * the main component for detail page which includes  
 * canvas page and variable drop down list  
 * 
 * @author parham, 08.05  
 */

import React, {Component, useContext} from 'react';
import CanvasPage from './CanvasPageComponent';
import SelectVariable from './SelectVariable';
import {PrivateSectionContext} from "resources/PrivateSectionContext";

function DetailInfo() {
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    console.log('DEBUG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(selectedProducts);
        return (
            <React.Fragment>
                <h2 className='w3-margin-bottom'>
                    The chosen Model is {selectedProducts[0].modelName}
                </h2>
                <SelectVariable className='w3-section'></SelectVariable>
                <CanvasPage></CanvasPage>
            </React.Fragment>
        );
}

export default DetailInfo;
