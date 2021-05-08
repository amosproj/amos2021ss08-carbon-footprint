import React, {useState, createContext} from 'react';

export const PrivateSectionContext = createContext();

/**
 * Defines a StateProvider, that passes down all its data to every child component.
 * 
 * @param {*} props 
 * @returns 
 */
export const StateProvider = props => {
    const [selectedProducts, setSelectedProducts] = useState([
        {a: 0}
    ]);





    return (
        <PrivateSectionContext.Provider >
            {props.children}
        </PrivateSectionContext.Provider>
    )

};