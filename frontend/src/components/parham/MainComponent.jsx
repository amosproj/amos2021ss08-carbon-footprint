import React, { Component } from "react";
import ListGroup from "./listGroup";
import DropDown from "./DropDown"
import Canvas from "./Canvas";
import { getModels } from "./fakeModelsService";
import _ from "lodash";
import { Column, Row } from "simple-flexbox";


class MainComponent extends Component {
  state = {
    products: [],
    models: [],
    variables: [],
    selectedModel: "",
    selected: { product: "title", model: "asc", variable: "" }
  };

  componentDidMount() {
    const models = [{ _id: "", name: "All Categories" }, ...getModels()];

    this.setState({ models });
  }


  handleModelSelect = model => {
    this.setState({ selectedModel : model.name});
  };



  render() {
    return (
      <Column className="w3-margin-bottom">
      <Row >
        <Column className="w3-margin-right">
          <ListGroup
            items={this.state.models}
            selectedItem={this.state.selected.model}
            onItemSelect={this.handleModelSelect}
          />
        </Column>
    
        <Column className="w3-margin-left w3-margin-bottom">
          <p>Showing Products and models and variables in the database.</p>
          <DropDown className="w3-margin-top w3-margin-bottom"
            selectedModel={this.state.selectedModel}
          />
        </Column>
      </Row>
      <Row>
        <Canvas></Canvas>
      </Row>
      </Column>
    );
  }
}

export default MainComponent;
