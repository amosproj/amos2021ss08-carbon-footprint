import React, { Component } from 'react';
import theme from 'resources/theme';

/** 
a drop down component for selecting variables 
if we need to compare two variables

 @author Parham Gandomkar
*/
const CompareVariablesComponent = (props) => {
    const {state} = props; 
    return ( 
    
    <div>
        Pick your desire variable:
        <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
            <button className='w3-button w3-2018-sailor-blue' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                {state.selectedVariable}
            </button>
            <div className='w3-dropdown-content w3-bar-block w3-border' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                {state.variables.map((item) => (
                    <a
                        onClick={() => props.firstDropDownHandler(item.name)}
                        className='w3-bar-item w3-button'
                        key={item.id}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
        <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
            <button className='w3-button w3-2018-sailor-blue' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                {state.secondVariable}
            </button>
            <div className='w3-dropdown-content w3-bar-block w3-border' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                {state.variables.map((item) => (
                    <a
                        onClick={() => props.secondDropDownHandler(item.name)}
                        className='w3-bar-item w3-button'
                        key={item.id}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
        <button onClick={props.submitHandler} style={{backgroundColor:theme.uniformStyle.color.sendButtonColor}} className='w3-button w3-wide'>
            <b style={{fontSize:theme.typography.buttonSendtitle.fontSize,fontWeight:theme.typography.buttonSendtitle.fontWeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing,lineHeight:theme.typography.buttonSendtitle.lineHeight}}>Send Request</b>
        </button>
    </div>  );
}
 
export default CompareVariablesComponent;