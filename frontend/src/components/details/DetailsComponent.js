/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @author parham, 08.05
 */

import React, { Component, useContext } from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import { PrivateSectionContext } from 'hooks/PrivateSectionContext';
import DividerPannel from './PanelComponent';

class DetailInfo extends Component {
    state = {
        compareCanvas: false
    };
    render() {
        /*
        we should later on find a way to make this line also compatible with class component 
        */
        //const [selectedProducts, setSelectedProducts] = useContext(PrivateSectionContext);

        /*
         the default canvas has to be divided into two canvases
         */
        let handleCompareButton = () => {
            const compareCanvas = true;
            /*
            now canvas component should be notified 
            by setting the compareCanvas state to true
            */
            this.setState({ compareCanvas });
        };

        return (
            <React.Fragment>
                {/* <h2>The chosen Model is {selectedProducts[0].modelName}</h2> */}
                <SelectVariable></SelectVariable>
                <DividerPannel onCompareClick={handleCompareButton}></DividerPannel>

                <Canvas loadComparePage={this.state.compareCanvas}></Canvas>
            </React.Fragment>
        );
    }
}

export default DetailInfo;
