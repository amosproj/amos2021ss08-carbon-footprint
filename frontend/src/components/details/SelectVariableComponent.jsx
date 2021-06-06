import DropDownComponent from 'components/dropdown/DropDownComponent';
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
            <div className='w3-row w3-margin-top'>
                <div className='w3-col l4 m3 s3'>
                    {this.state.variables.length > 1 ? (
                        <h4>Select your desire variable:</h4>
                    ) : (
                        <h4>There is only one Model for this product: </h4>
                    )}
                </div>
                <div className='w3-col l3 m4 s4 w3-left'>
                    <DropDownComponent
                        selectedVariable={this.state.selectedVariable}
                        variables={this.state.variables}
                        dropDownHandler={this.onDropDownItemSelectedHandler}
                    />
                </div>
                <div className='w3-col l3 m4 s4 w3-left'>
                    <button
                        style={{ backgroundColor: theme.uniformStyle.color.sendButtonColor }}
                        onClick={this.handleSubmit}
                        className='w3-button w3-wide w3-left'
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
    }
}

export default SelectVariableComponent;
