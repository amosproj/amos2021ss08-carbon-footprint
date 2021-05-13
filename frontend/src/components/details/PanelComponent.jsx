/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author parham
 */
import React, { Component } from 'react';

const DividerPannel = (props) => {
    return (
        <div className='w3-panel w3-2019-bluestone w3-padding-small'>
            <div className='w3-row'>
                <div className='w3-col s9'>
                    <h2 className='w3-opacity'>Canvas page</h2>
                </div>
                <div className='w3-col s3  w3-center'>
                    {/* calling the compare button by using props which its parrent has provided*/}
                    <button onClick={props.onCompareClick} className='w3-button w3-border'>
                        <b>Compare</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DividerPannel;
