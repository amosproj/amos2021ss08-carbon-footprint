import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import LoadingComponent from 'components/loading';
import { getModels } from 'assets/dummyData/dummyData';

/**
 * This component creates the dropdownboxes for the related products
 *
 * It calls the Backend to get the Models for a specific productID
 *
 * @returns the model properties of the related product depending on the model values from getModels func from interface/simaProInterface
 * @author Parham Gandomkar, Martin Wagner, Irem Toroslu, Mani Anand
 */
const ModelDropdownComponent = (props) => {
    const productID = props.productID;
    const productName = props.productName;

    // eslint-disable-next-line
    const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);

    // set the initial values for the dropdown list derived from getModels
    const variables = getModels(productName, productID);

    const [selected, setSelected] = useState('Select a model');

    //checking if the variable list is empty
    if (variables === [] || variables === undefined || variables === null) {
        return <LoadingComponent loading />;
    }

    if (variables.length === 1) {
        let variableName = variables[0].modelName;

        return (
            <div>
                <button title={variableName} className='w3-button dropDown'>
                    {variableName.length > 25
                        ? variableName.substring(0, 25 - 3) + '...'
                        : variableName}
                </button>
            </div>
        );
    }

    if (variables.length === 0) {
        return (
            <button className='w3-button dropDown' disabled>
                Baseline scenario
            </button>
        );
    }

    return (
        <div className='w3-dropdown-hover '>
            <button className='w3-button dropDown' title={selected}>
                {selected.length > 25 ? selected.substring(0, 25 - 3) + '...' : selected}
            </button>
            <div className='w3-dropdown-content w3-bar-block w3-border dropDown'>
                {variables.map((item) => (
                    <button
                        onClick={(props) => {
                            // Set the Selected Product to the one that has been clicked.
                            const newSelectedProducts = [
                                {
                                    productID: productID,
                                    productName: productName,
                                    modelID: item.modelID,
                                    modelName: item.modelName
                                }
                            ];
                            setSelected(item.modelName);
                            setSelectedProducts(newSelectedProducts);
                        }}
                        className='w3-bar-item w3-button dropDown'
                        key={item.modelID}
                    >
                        {item.modelName.length > 35
                            ? item.modelName.substring(0, 35 - 3) + '...'
                            : item.modelName}
                    </button>
                ))}
            </div>
        </div>
    );
};

ModelDropdownComponent.propTypes = {
    productID: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired
};

export default ModelDropdownComponent;
