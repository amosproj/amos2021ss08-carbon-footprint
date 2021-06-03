import React, { Component } from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import DividerPanel from './PanelComponent';
import theme from 'resources/theme';
import { Col, Container, Row } from 'react-grid-system';
import './navbar.css';

/**
 * the main component for detail page which includes
 * canvas page and variable drop down list
 *
 * @param props the recently selected model of a product.
 * @author Parham Gandomkar, Martin Wagner, Irem Toroslu, Julian Oelhaf
 */
class DetailsComponent extends Component {
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
        const scenarioNames = {
            baseline: 'Baseline Scenario',
            modified: 'modified Scenario'
        };
        const { selectedProduct } = this.props;
        if (!this.state.compareCanvas) {
            return (
                <React.Fragment>
                    <DividerPanel
                        loadComparePage={this.state.compareCanvas}
                        onCompareClick={handleCompareButton}
                        scenarioName={scenarioNames.baseline}
                    />
                    <h2 className='DetailsPageTextContent' >The chosen Model is {selectedProduct.modelName}</h2>
                    <div style={{ marginLeft: 15 }}>
                        <SelectVariable loadComparePage={this.state.compareCanvas} />
                    </div>

                    <Canvas loadComparePage={this.state.compareCanvas} />
                </React.Fragment>
            );
        } else {
            return (
                <Container fluid={true}>
                    <Row>
                        <Col
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            style={{ backgroundColor: 'white', margin: '1em' }}
                        >
                            <DividerPanel
                                loadComparePage={this.state.compareCanvas}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames.baseline}
                            />
                            <h2 className='DetailsPageTextContent'>
                                The chosen Model is {selectedProduct.modelName}
                            </h2>
                            <div style={{ marginLeft: 15 }}>
                                <SelectVariable loadComparePage={this.state.compareCanvas} />
                            </div>

                            <Canvas loadComparePage={this.state.compareCanvas} />
                        </Col>

                        <Col
                            xs={12}
                            sm={12}
                            md={5}
                            lg={5}
                            style={{ backgroundColor: 'white', margin: '1em' }}
                        >
                            <DividerPanel
                                loadComparePage={this.state.compareCanvas}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames.modified}
                            />
                            <h2 className='DetailsPageTextContent'>
                                The chosen Model is {selectedProduct.modelName}
                            </h2>
                            <div style={{ marginLeft: 15 }}>
                                <SelectVariable loadComparePage={this.state.compareCanvas} />
                            </div>

                            <Canvas loadComparePage={this.state.compareCanvas} />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default DetailsComponent;
