import React, { Component } from 'react';
import theme from 'resources/theme';

const DropDownComponent = (props) => {
    const { selectedVariable, variables, dropDownHandler } = props;
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
};

export default DropDownComponent;
