import React, { Component } from 'react';

/**
 * a drop down component for selecting variable
 *
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
        variables: [{ id: '1', name: 'variable 1' }]
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
            <div className='w3-row'>
                <div className='w3-col l6 m6 s3'>
                    <h4 className='TextContent'>Select your desire variable:</h4>
                </div>
                <div className='w3-col l6 m6 s8 w3-left'>
                    <div className='w3-dropdown-hover  w3-margin-right w3-margin-top w3-margin-bottom'>
                        <button className='w3-button dropDown'>
                            {this.state.selectedVariable}
                        </button>
                        <div className='w3-dropdown-content w3-bar-block w3-border'>
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
