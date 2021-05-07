import React, {useState, createContext} from 'react';

export const PrivateRoutesContext = createContext();

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
        <PrivateRoutesContext.Provider >
            {props.children}
        </PrivateRoutesContext.Provider>
    )

};