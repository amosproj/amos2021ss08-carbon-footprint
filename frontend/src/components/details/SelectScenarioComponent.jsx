import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * a drop down component for selecting variable
 *
 */

class SelectScenarioComponent extends Component {
    /*
    hard coded state for storing variabes array 
    and selected variable 

    note: later on this state should be removed 
    and instead props should be used 
    because of the single source of truth rule 
  */
    state = {
        secondScenario: '',
        scenarios: [{ id: '', name: '' }]
    };

    onDropDownItemSelectedHandler = (item) => {
        this.props.newScenarioHandler(item);
    };

    onSecondDropDownSelectedHandler = (name) => {
        const secondScenario = name;
        this.setState({ secondScenario: secondScenario });
    };

    componentDidMount = () => {
        this.setState(this.updateStateScenario());
    };

    updateStateScenario = () => {
        let scenarioList = [];
        // Handle the first element (baseline)
        scenarioList.push({
            id: this.props.selectedProduct.productID,
            name: this.props.selectedProduct.scenarioType
        });
        let secondaryScenarioList = this.props.selectedProduct.scenarioList;

        // Handle the scenarioList of the baseline (if any)
        for (let index = 0; index < secondaryScenarioList.length; index++) {
            const product = secondaryScenarioList[index];
            scenarioList.push({ id: product.productID, name: product.scenarioType });
        }

        // Set State to the calculated List
        let newState = {
            selectedSecondScenario: '',
            scenarios: scenarioList
        };
        return newState;
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
                            {this.props.selectedScenarioType}
                        </button>
                        <div className='w3-dropdown-content w3-bar-block w3-border'>
                            {this.state.scenarios.map((item) => (
                                <button
                                    onClick={() => this.onDropDownItemSelectedHandler(item)}
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

SelectScenarioComponent.propTypes = {
    newScenarioHandler: PropTypes.func,
    selectedScenarioType: PropTypes.string,
    selectedProduct: PropTypes.shape({
        categories: PropTypes.array, // [(categories.generation, categories.transmission)],
        modelID: PropTypes.string, // 'none',
        modelName: PropTypes.string, // 'please select a Product',
        productID: PropTypes.string.isRequired, // 'dummydum-13b0-4e09-9fb4-50398483ecfd'
        productImage: PropTypes.string, //ImagePath?
        productName: PropTypes.string, //'please select a Product'
        scenarioList: PropTypes.array.isRequired,
        scenarioType: PropTypes.string.isRequired
    })
};

export default SelectScenarioComponent;
