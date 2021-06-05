import React from 'react';
import theme from 'resources/theme';
import DropDownComponent from 'components/dropdown/DropDownComponent';

/** 
a drop down component for selecting variables 
if we need to compare two variables

 @author Parham Gandomkar
*/
const CompareVariablesComponent = (props) => {
    const { state } = props;
    return (
        <div className='w3-row w3-margin-top'>
            <div className='w3-col l3 m3 s3 w3-left w3-margin-right'>
                <h4>Select variables to compare:</h4>
            </div>
            <div className='w3-col l3 m3 s3 w3-left'>
                <DropDownComponent
                    selectedVariable={state.selectedVariable}
                    variables={state.variables}
                    dropDownHandler={props.firstDropDownHandler}
                />
            </div>
            <div className='w3-col l3 m3 s3 w3-left'>
                <DropDownComponent
                    selectedVariable={state.secondVariable}
                    variables={state.variables}
                    dropDownHandler={props.secondDropDownHandler}
                />
            </div>
            <div className='w3-col l2 m2 s1 w3-right'>
                <button
                    onClick={props.submitHandler}
                    style={{ backgroundColor: theme.uniformStyle.color.sendButtonColor }}
                    className='w3-button w3-wide w3-right w3-margin-right'
                >
                    <b
                        style={{
                            fontSize: theme.typography.buttonSendtitle.fontSize,
                            fontWeight: theme.typography.buttonSendtitle.fontWeight,
                            letterSpacing: theme.typography.buttonSendtitle.letterSpacing,
                            lineHeight: theme.typography.buttonSendtitle.lineHeight
                        }}
                    >
                        Send Request
                    </b>
                </button>
            </div>
        </div>
    );
};

export default CompareVariablesComponent;
