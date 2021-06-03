import React, { Component } from 'react';
import Canvas from './CanvasComponent';
import SelectVariable from './SelectVariableComponent';
import DividerPanel from './PanelComponent';
import { Container } from 'react-grid-system';
import './navbar.css';

class ScenarioComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <Container style={{ backgroundColor: 'white', padding: 0 }}>
                <DividerPanel
                    loadComparePage={this.props.compareCanvas}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                />

                <h2>The chosen Model is {this.props.selectedProduct.modelName}</h2>
                <SelectVariable loadComparePage={this.props.loadComparePage} />
                <Canvas loadComparePage={this.props.loadComparePage} />
            </Container>
        );
    }
}

export default ScenarioComponent;
