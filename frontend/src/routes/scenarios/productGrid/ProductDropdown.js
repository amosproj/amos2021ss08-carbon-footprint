
import React, { useContext, useState } from 'react';
import { IconArrowDown } from 'assets/icons';
import {getModels, getProducts} from 'interface/simaProInterface'
import {PrivateSectionContext} from 'resources/PrivateSectionContext';
import iconBellNew from 'assets/icons/icon-bell-new';


/**
 * This component creates the dropdownboxes for the related products 
 * 
 * @returns the model properties of the related product depending on the model values from getModels func from interface/simaProInterface
 * @author parham, Martin Wagner, Irem 
 */

const SelectModelVariable = (props) =>  {
    const productID = props.productID;
    const productName = props.productName;
    

    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    // set the initial values for the dropdown list derived from getModels
    const variables = getModels(productID);  
    const [ selected, setSelected ] = useState('Select a model');
    console.log('variables');
    console.log(variables);

        return (
            <div>

                <div className='w3-dropdown-hover w3-green w3-margin-bottom w3-margin-left:5em w3-margin-right w3-margin-top w3-margin-bottom:2em' >
                <IconArrowDown/>
                    <button className=' w3-button w3-border w3-white'>{selected}</button>
                    <div className=' w3-dropdown-content w3-dropdown-hover w3-bar-block w3-border '>
                    {variables.map((item) => (
                       
                        <a
                            onClick={(props) => {
                                const newSelectedProducts =
                                    [{
                                        productID: productID,
                                        productName: productName,
                                        modelID: item.model,
                                        modelName: item.modelName
                                    }]
                                    setSelected(item.model) ;
                                    console.log("MAAAAAAN");
                                    console.log(newSelectedProducts);
                                    setSelectedProducts(newSelectedProducts);
                                    console.log(selectedProducts);
                                }} 
                                className='w3-bar-item w3-button'
                                key={item.modelID}
                            >
                                {item.model}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

export default SelectModelVariable;
