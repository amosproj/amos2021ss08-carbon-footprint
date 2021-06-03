import React, { Component } from 'react';
import CanvasComponent from './CanvasComponent';
import SelectVariableComponent from './SelectVariableComponent';
import NavbarComponent from './NavbarComponent';
import { Container } from 'react-grid-system';
import './navbar.css';

class ScenarioComponent extends Component {
    render() {
        console.log(this.props);

        return (
            <Container style={{ backgroundColor: 'white', padding: 0 }}>
                <NavbarComponent
                    loadComparePage={this.props.compareCanvas}
                    onCompareClick={this.props.onCompareClick}
                    scenarioName={this.props.scenarioName.baseline}
                />

                <h2>The chosen Model is {this.props.selectedProduct.modelName}</h2>
                <SelectVariableComponent loadComparePage={this.props.loadComparePage} />
                <CanvasComponent loadComparePage={this.props.loadComparePage} />
            </Container>
        );
    }
}

export default ScenarioComponent;
