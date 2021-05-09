/**
 * The PrivateSectionContext enables cross-Component State-Management
 * 
 * @author Martin Wagner
 */

import React, {useState, createContext} from 'react';

export const PrivateSectionContext = createContext();

/**
 * Defines a StateProvider, that passes down all its data to every child component.
 * 
 * @param {*} props 
 * @returns 
 */
export const PrivateStateProvider = props => {
    const [selectedProducts, setSelectedProducts] = useState([
        {
            productID: 0,
            productName: 'Ich bin ein TEST'
        },
        {
            productID: 1,
            productName: 'Ich bin ein TE5T'
        }
    ]);

    return (
        <PrivateSectionContext.Provider value={[selectedProducts, setSelectedProducts]}>
            {props.children}
        </PrivateSectionContext.Provider>
    )

};