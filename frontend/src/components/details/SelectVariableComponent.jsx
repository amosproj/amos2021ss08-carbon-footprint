/** 
a drop down component for selecting variable

@author parham, 08.05
*/
import React, { Component } from 'react';

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
        if (this.props.loadComparePage) {
            return (
                <div>
                    Pick your desire variable:
                    <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
                        <button className='w3-button w3-2018-sailor-blue'>
                            {this.state.selectedVariable}
                        </button>
                        <div className='w3-dropdown-content w3-bar-block w3-border'>
                            {this.state.variables.map((item) => (
                                <a
                                    onClick={() => this.onDropDownItemSelectedHandler(item.name)}
                                    className='w3-bar-item w3-button'
                                    key={item.id}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
                        <button className='w3-button w3-2018-sailor-blue'>
                            {this.state.secondVariable}
                        </button>
                        <div className='w3-dropdown-content w3-bar-block w3-border'>
                            {this.state.variables.map((item) => (
                                <a
                                    onClick={() => this.onSecondDropDownSelectedHandler(item.name)}
                                    className='w3-bar-item w3-button'
                                    key={item.id}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <button onClick={this.handleSubmit} className='w3-button w3-teal w3-wide'>
                        <b>Send Request</b>
                    </button>
                </div>
            );
        }
        return (
            <div>
                Pick your desire variable:
                <div className='w3-dropdown-hover w3-margin-left w3-margin-right w3-margin-top'>
                    <button className='w3-button w3-2018-sailor-blue'>
                        {this.state.selectedVariable}
                    </button>
                    <div className='w3-dropdown-content w3-bar-block w3-border'>
                        {this.state.variables.map((item) => (
                            <a
                                onClick={() => this.onDropDownItemSelectedHandler(item.name)}
                                className='w3-bar-item w3-button'
                                key={item.id}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <button onClick={this.handleSubmit} className='w3-button w3-teal w3-wide'>
                    <b>Send Request</b>
                </button>
            </div>
        );
    }
}

export default SelectVariableComponent;