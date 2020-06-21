import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onTermChange(searchTerm);
  }

  render() {
    return (
      <div className="search">
        <input
          placeholder="Search Recipe"
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <button onChange={(event) => this.onInputChange(event.target.value)}>
          {" "}
          Search{" "}
        </button>
      </div>
    );
  }
}

export default SearchBar;
