import React, {useContext} from 'react';
import theme from 'resources/theme';

/**
 * Displaying a label.
 * 
 * @author Mani
 * @author Martin Wagner
 */

function LabelComponent({productName}) {
    return (
        <span style={{fontSize:theme.typography.textcontent.fontSize,fontWeight:theme.typography.textcontent.fontWeight}} class='w3-container w3-center w3-lightgrey w3-margin-bottom w3-margin-left:5em w3-margin-right w3-margin-top w3-margin-bottom:2em'>
            {productName}
        </span>
    );
}

export default LabelComponent;
