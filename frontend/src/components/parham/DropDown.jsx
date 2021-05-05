import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./DropDown.css";

class DropDown extends Component {

  state = {
    value: "coconut",
    countries: [
      { id: "1", country: "variable 1" },
      { id: "2", country: "variable 2" },
      { id: "3", country: "variable 3" },
    ],
  };

 

  handleSubmit(event) {
    alert("The choosen variable is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {

    return (
      <div className=" w3-margin-top" onSubmit={this.handleSubmit}>
          <h2 className="w3-margin-bottom w3-margin-top">The choosen Model is {this.props.selectedModel}</h2>
          Pick your desire variable:
          <div className="w3-dropdown-hover w3-margin-left w3-margin-right">
            <button className="w3-button w3-black">Hover Over Me!</button>
            <div className="w3-dropdown-content w3-bar-block w3-border">
              {this.state.countries.map((item) => (
                <a
                  className="w3-bar-item w3-button"
                  key={item.id}
                  value={item.country}
                >
                  {item.country}
                </a>
              ))}
            </div>
          </div>
        <button  className="w3-button w3-teal w3-wide" disabled>
          <b>Send Request</b>
        </button>
        
        <div className="w3-margin-top" onSubmit={this.handleSubmit}>
            Looping through Array
            <select className="w3-margin-left">
              {this.state.countries.map((item) => (
                <option key={item.id} value={item.country}>
                  {item.country}
                </option>
              ))}
              {console.log(this.state.countries)}
            </select>
            <button  className="w3-button w3-teal w3-wide w3-margin-left" disabled>
          <b>Send Request</b>
        </button>
        </div>
      </div>
    );
  }
}

export default DropDown;
