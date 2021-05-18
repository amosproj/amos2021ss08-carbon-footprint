/**
 * a divider Pannel for seperating search compoents and result components
 * and also providing the comparison feature by compare button
 *
 * @author parham
 */
import React, { Component } from 'react';
import theme from 'resources/theme';
const PanelComponent = (props) => {
    return (
        <div className='w3-panel w3-padding-small' style={{backgroundColor:'#467d85',marginLeft:15}}>
            <div className='w3-row'>
                <div className='w3-col s9'>
                    <h2 className='w3-opacity' style={{color:'white',fontSize:theme.typography.subtitle.fontSize,fontWeight:theme.typography.subtitle.fontWeight,lineHeight:theme.typography.subtitle.lineHeight,letterSpacing:theme.typography.subtitle.letterSpacing,marginTop:6}}>Canvas page</h2>
                </div>
                <div className='w3-col s3  w3-center'>
                    {/* calling the compare button by using props which its parrent has provided*/}
                    <button

                        onClick={props.onCompareClick}
                        className='w3-button w3-border'
                        disabled={props.loadComparePage}
                    >
                        <b
                        style={{color:'white' ,fontSize:theme.typography.buttonSendtitle.fontSize,fontWeight:theme.typography.buttonSendtitle.fontWeight,lineHeight:theme.typography.buttonSendtitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>Compare</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PanelComponent;
