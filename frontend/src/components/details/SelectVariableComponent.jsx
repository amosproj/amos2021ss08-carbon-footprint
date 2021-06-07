import React, { Component } from 'react';
import theme from 'resources/theme';

/**
 * a drop down component for selecting variable
 *
 * @author Parham Gandomkar, Irem Toroslu
 */

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
        secondVariable: 'variable 2',
        variables: [
            { id: '1', name: 'variable 1' },
            { id: '2', name: 'variable 2' },
            { id: '3', name: 'variable 3' }
        ]
    };

    handleSubmit = () => {
        alert('The choosen variable is: ' + this.state.selectedVariable);
    };

    onDropDownItemSelectedHandler = (name) => {
        const selectedVariable = name;
        this.setState({ selectedVariable });
    };

    onSecondDropDownSelectedHandler = (name) => {
        const secondVariable = name;
        this.setState({ secondVariable });
    };

    render() {
        /*
        if the loadComparePage state from its parrent (the detail Component) 
        is set to true, here an extra drop down for the second variable
         should be rendered 
        */

        return (
            <div className='w3-row w3-margin-top'>
                <div className='w3-col l6 m6 s3'>
                    <h4>Select your desire variable:</h4>
                </div>
                <div className='w3-col l6 m6 s8 w3-left'>
                    <div className='w3-dropdown-hover w3-margin-left w3-margin-right'>
                        <button className='w3-button w3-2018-sailor-blue'>
                            <div className='ButtonTitle'>{this.state.selectedVariable}</div>
                        </button>
                        <div
                            className='w3-dropdown-content w3-bar-block w3-border'
                            style={{
                                fontSize: theme.typography.buttontitle.fontSize,
                                fontWeight: theme.typography.buttontitle.fontWeight,
                                lineHeight: theme.typography.buttontitle.lineHeight,
                                letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                            }}
                        >
                            {this.state.variables.map((item) => (
                                <button
                                    onClick={() => this.onDropDownItemSelectedHandler(item.name)}
                                    className='w3-bar-item w3-button'
                                    key={item.id}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectVariableComponent;
