/*
a drop down component for selecting variable

parham, 08.05
*/
import React, { Component } from 'react';
import {getModels, getProducts} from 'interface/projectInterface'
class SelectVariable extends Component {
    /*
    hard coded state for storing variabes array 
    and selected variable 

    note: later on this state should be removed 
    and instead props should be used 
    because of the single source of truth rule 
  */
    state = {
        selectedVariable: 'variable 1',
        variables: getModels()
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
                    <button className='w3-button w3-black'>{this.state.selectedVariable}</button>
                    <div className='w3-dropdown-content w3-bar-block w3-border'>
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
                <button onClick={this.handleSubmit} className='w3-button w3-teal w3-wide'>
                    <b>Send Request</b>
                </button>
            </div>
        );
    }
}

export default SelectVariable;