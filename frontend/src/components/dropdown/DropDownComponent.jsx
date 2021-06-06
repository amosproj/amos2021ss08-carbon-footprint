import React from 'react';
import theme from 'resources/theme';

/**
 * a seperate DropDownComponent
 * here will be decided if the number of variables are more than one
 * then a drop down list should be shown
 * otherwise there is nothing to select
 *
 * @author Parham Gandomkar
 */

const DropDownComponent = (props) => {
    const { selectedVariable, variables, dropDownHandler } = props;

    if (variables.length > 1)
        return (
            <div className='w3-dropdown-hover w3-margin-left w3-margin-right'>
                <button
                    className='w3-button w3-2018-sailor-blue'
                    style={{
                        fontSize: theme.typography.buttontitle.fontSize,
                        fontWeight: theme.typography.buttontitle.fontWeight,
                        lineHeight: theme.typography.buttontitle.lineHeight,
                        letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                    }}
                >
                    {selectedVariable}
                </button>
                <div
                    className='w3-dropdown-content w3-bar-block w3-border'
                    style={{
                        fontSize: theme.typography.buttontitle.fontSize,
                        fontWeight: theme.typography.buttontitle.fontWeight,
                        lineHeight: theme.typography.buttontitle.lineHeight,
                        letterSpacing: theme.typography.buttonSendtitle.letterSpacing
                    }}
                >
                    {variables.map((item) => (
                        <button
                            onClick={() => dropDownHandler(item.name)}
                            className='w3-bar-item w3-button'
                            key={item.id}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        );
    else return <h3 className='w3-margin-left w3-margin-right'>{selectedVariable}</h3>;
};

export default DropDownComponent;
