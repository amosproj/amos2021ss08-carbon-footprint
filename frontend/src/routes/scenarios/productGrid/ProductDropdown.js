
import React, { useContext, useState } from 'react';
import { IconArrowDown } from 'assets/icons';
import {getModels, getProducts} from 'interface/projectInterface'
import {PrivateSectionContext} from 'resources/PrivateSectionContext';
import iconBellNew from 'assets/icons/icon-bell-new';

const newSelectedProducts = 
[
    {   
        productID: '',
        productName: '',
        modelID: '',
        modelName: ''
    }] 
/**
 * This component creates the dropdownboxes for the related products 
 * 
 * @returns the model properties of the related product depending on the model values from getModels func from interface/projectInterface
 *  @author parham, Martin, Irem 
 */

function SelectModelVariable() {
    
    const [ selectedProducts, setSelectedProducts ] = useContext(PrivateSectionContext);
    // set the initial values for the dropdown list derived from getModels
    const [ variables, setVariables ] = useState(getModels());  
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
                                    console.log(props);
                                    newSelectedProducts[0].modelName=item.models;
                                    newSelectedProducts[0].modelID=item.ProjectID;
                                    //SelectedProducts[0].modelName=item.models;
                                    //SelectedProducts[0].modelName=item.models;
                                    console.log(item.models);
                                    setSelected(item.models) ;
                                    console.log(newSelectedProducts) ; 
                                    setSelectedProducts(newSelectedProducts);
                                }} 
                                className='w3-bar-item w3-button'
                                key={item.ProjectID}
                            >
                                {item.models}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

export default SelectModelVariable;
