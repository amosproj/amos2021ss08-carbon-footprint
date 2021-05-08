import React, {useContext} from 'react';
import { getModels } from 'interface/projectInterface';
import Select from 'react-select'
import {PrivateSectionContext} from 'resources/PrivateSectionContext';

//TODO: When a model is selected the user should be directed to the Details Page
//TODO: When only one model is available, => How to do that then? Should a click on the image link in that case?

/**
 * creates a DropdownButton
 *
 * @returns {JSX.Element}
 * @constructor
 */
function DropdownButton() {
    // selectedProducts is the old state.
    // setSelectedProducts can be used to overwrite that old state.
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);

    return (
        <Select
            options={getModels()}
            onChange={(props) => {
                console.log(props);
                const newSelectedProducts =
                {
                    productID: 'abiut-08fbw-asdhi',
                    productName: 'Ich bin ein TEST'
                }
                setSelectedProducts(newSelectedProducts);
            }} // props is the currently selected item.
        />
    )
}

export default DropdownButton;