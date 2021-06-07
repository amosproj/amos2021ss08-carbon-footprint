import React, { Component } from 'react';
import ScenarioComponent from './ScenarioComponent';
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
                <Container fluid={true} style={{ padding: 'auto' }}>
                    <Row>
                        <Col style={{ padding: 0 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.compareCanvas}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container fluid={true} style={{ padding: 0, margin: 0 }}>
                    <Row gutterWidth={0}>
                        <Col xs={6} sm={6} md={6} lg={6} style={{ padding: 0 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.compareCanvas}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                            />
                        </Col>

                        <Col xs={6} sm={6} md={6} lg={6} style={{ padding: 0 }}>
                            <ScenarioComponent
                                loadComparePage={this.state.compareCanvas}
                                onCompareClick={handleCompareButton}
                                scenarioName={scenarioNames}
                                selectedProduct={selectedProduct}
                            />
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default DetailsComponent;
