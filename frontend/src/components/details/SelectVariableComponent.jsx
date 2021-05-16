/** 
a drop down component for selecting variable

@author parham, 08.05
*/
import React, { Component } from 'react';
import theme from 'resources/theme';

class SelectVariableComponent extends Component {
    /*
    hard coded state for storing variabes array 
    and selected variable 

    note: later on this state should be removed 
    and instead props should be used 
    because of the single source of truth rule 
  */
    state = {
        selectedVariable: 'variable 1',
        variables: [
            { id: '1', country: 'variable 1' },
            { id: '2', country: 'variable 2' },
            { id: '3', country: 'variable 3' }
        ]
    };

    handleSubmit = () => {
        alert('The choosen variable is: ' + this.state.selectedVariable);
    };

    onDropDownItemSelectedHandler = (country) => {
        const selectedVariable = country;
        this.setState({ selectedVariable });
    };

    render() {
        return (
            <div>
                Pick your desire variable:
                <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
                    <button className='w3-button w3-2018-sailor-blue' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                        {this.state.selectedVariable}
                    </button>
                    <div className='w3-dropdown-content w3-bar-block w3-border' style={{fontSize:theme.typography.buttontitle.fontSize,fontWeight:theme.typography.buttontitle.fontWeight,lineHeight:theme.typography.buttontitle.lineHeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing}}>
                        {this.state.variables.map((item) => (
                            <a
                                onClick={() => this.onDropDownItemSelectedHandler(item.country)}
                                className='w3-bar-item w3-button'
                                key={item.id}
                            >
                                {item.country}
                            </a>
                        ))}
                    </div>
                </div>
                <button  style={{backgroundColor:theme.uniformStyle.color.sendButtonColor}} onClick={this.handleSubmit} className='w3-button w3-wide'>
                    <b style={{fontSize:theme.typography.buttonSendtitle.fontSize,fontWeight:theme.typography.buttonSendtitle.fontWeight,letterSpacing:theme.typography.buttonSendtitle.letterSpacing,lineHeight:theme.typography.buttonSendtitle.lineHeight}}>Send Request</b>
                </button>
            </div>
        );
    }
}

export default SelectVariableComponent;
