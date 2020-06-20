import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { debounce } from "lodash";
import { fetchAllRecipesThunk } from "../../thunks";
import { AllRecipesView } from "../views";

//THE ALLRECIPES IS BASICALLY THE SEARCHBAR, SEARCH FOR RECIPES USING SEARCH TERM

class AllRecipesContainer extends Component {
  componentDidMount() {
    this.props.fetchAllRecipes("undefined");
  }

  handleTermChange = (searchTerm) => {
    this.props.fetchAllRecipes(searchTerm);
  };
  render() {
    return (
      <div>
        <div className="all-recipes-container">
          <h2>Navigate through recipes!</h2>
        </div>
        <SearchBar
          style={{
            fontSize: 24,
            width: "50%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 10,
          }}
          onTermChange={debounce(
            (searchTerm) => this.handleTermChange(searchTerm),
            1000
          )}
        />
        <AllRecipesView recipes={this.props.allRecipes} />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allRecipes: state.allRecipes,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllRecipes: (searchTerm) => dispatch(fetchAllRecipesThunk(searchTerm)),
  };
};

export default connect(mapState, mapDispatch)(AllRecipesContainer);
