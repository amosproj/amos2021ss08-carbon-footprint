
import React, { Component } from 'react';
import { IconArrowDown } from 'assets/icons';
import {getModels, getProducts} from 'interface/projectInterface'


class SelectVariable extends Component {

    state = {
        selectedVariable: 'Select one model',
        variables: getModels()
    };

    // handleSubmit = () => {
    //     alert('The choosen variable is: ' + this.state.selectedVariable);
    // };

    onDropDownItemSelectedHandler = (models) => {
        const selectedVariable = models;
        this.setState({ selectedVariable });
    };

    render() {
        return (
            <div>

                <div className='w3-dropdown-hover w3-green w3-margin-bottom w3-margin-left:5em w3-margin-right w3-margin-top w3-margin-bottom:2em' >
                <IconArrowDown/>
                    <button className=' w3-button w3-border w3-white'>{this.state.selectedVariable}</button>
                    <div className=' w3-dropdown-content w3-dropdown-hover w3-bar-block w3-border '>


                        {this.state.variables.map((item) => (
                            <a
                                onClick={() => this.onDropDownItemSelectedHandler(item.models)}
                                className='w3-bar-item w3-button'
                                key={item.id}
                                
                            >
                                {item.models}
                            </a>
                        ))}
                        
                    </div>
                </div>
                {/* <button onClick={this.handleSubmit} className='w3-button w3-teal w3-wide'>
                    <b>Send Request</b>
                </button> */}
            </div>
        );
    }
}

export default SelectVariable;
