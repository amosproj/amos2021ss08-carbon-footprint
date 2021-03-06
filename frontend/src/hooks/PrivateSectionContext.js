/**
 * The PrivateSectionContext enables cross-Component State-Management
 *
 * @author Martin Wagner
 */

import React, { useState, createContext } from 'react';
import { categories } from 'resources/globalConstants/categories';

export const PrivateSectionContext = createContext();

/**
 * Defines a StateProvider, that passes down all its data to every child component.
 *
 * @param {{ productID: string, productName: string modelID: string, modelName: string, categories: [string], productImage: string}} props
 * the previous state that has been used.
 */

export const PrivateStateProvider = (props) => {
    const [selectedProducts, setSelectedProducts] = useState([
        // Default selection:
        {
            productID: '',
            productName: '',
            modelID: '',
            modelName: '',
            categories: [],
            productImage: ''
        },
        {
            productID: 'dummydum-13b0-4e09-9fb4-50398483ecfd', //(project_id?) final_process_id? (final_product_id?)
            productName: 'please select a Product', //final_process_name? -> probably rather the project name later. But unclear!
            modelID: 'none',
            modelName: 'please select a Product',
            categories: [categories.generation, categories.transmission],
            productImage: ''
        },
        {
            productID: 'dummydum-kldp-4fer-15s7-51245631fega', //(project_id?) final_process_id? (final_product_id?)
            productName: 'Dummy Product', //final_process_name?
            modelID: 'none2',
            modelName: 'please select a Product',
            categories: [categories.transmission],
            productImage: ''
        }
    ]);

    return (
        <PrivateSectionContext.Provider value={[selectedProducts, setSelectedProducts]}>
            {props.children}
        </PrivateSectionContext.Provider>
    );
};
