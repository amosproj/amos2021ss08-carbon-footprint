import React, { Component, useContext } from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import DividerPanel from './PanelComponent';
import theme from 'resources/theme';

/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @param props the recently selected model of a product.
 * @author parham, Martin Wagner
 */
class DetailComponent extends Component {
    state = {
        compareCanvas: false
    };

    render() {
        let styleSubtitle = {
            fontSize: theme.typography.subtitle.fontSize,
            fontWeight: theme.typography.subtitle.fontWeight,
            lineHeight: theme.typography.subtitle.lineHeight,
            letterSpacing: theme.typography.subtitle.letterSpacing,
            marginLeft: 15
        };
        /*
         the default canvas has to be divided into two canvases
         an extra drop down button for second variable should be rendered
         the compare button should be disabled 
         */
        let handleCompareButton = () => {
            const compareCanvas = true;
            /*
            now all components such as 
            canvas component should be notified 
            by setting the compareCanvas state to true
            */
            this.setState({ compareCanvas });
        };
        const { selectedProduct } = this.props;

        return (
            <React.Fragment>
                <h2 style={styleSubtitle}>The chosen Model is {selectedProduct.modelName}</h2>
                <div style={{ marginLeft: 15 }}>
                    <SelectVariable loadComparePage={this.state.compareCanvas} />
                </div>
                <DividerPanel
                    loadComparePage={this.state.compareCanvas}
                    onCompareClick={handleCompareButton}
                />
                <Canvas loadComparePage={this.state.compareCanvas} />
            </React.Fragment>
        );
    }
}

export default DetailComponent;
