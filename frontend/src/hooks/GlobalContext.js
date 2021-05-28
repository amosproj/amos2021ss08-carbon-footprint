/**
 * The GlobalContext enables cross-Component State-Management
 *
 * @author Martin Wagner
 */

import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

/**
 * Defines a StateProvider, that passes down all its data to every child component.
 *
 * @param {*} props the previous state that has been used.
 */
export const GlobalStateProvider = (props) => {
    const [state, setState] = useState([
        {
            userIsLoggedIn: true
        }
    ]);

    return (
        <GlobalContext.Provider value={[state, setState]}>{props.children}</GlobalContext.Provider>
    );
};
