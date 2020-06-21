import React, { Component } from "react";
import { me } from "../../thunks";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserProfileView } from "../views";

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this.props.me();
    console.log(this.props.firstName);
  }

  render() {
    return (
      <div>
        <UserProfileView />
        <h1>email {this.props.email}</h1>
      </div>
    );
  }
}

UserProfileContainer.propTypes = {};

const mapUser = (state) => {
  return {
    email: state.user.email,
    isLoggedIn: !!state.user.id,
  };
};

// Map login dispatch to props;
const mapDispatchUser = (dispatch) => {
  return {
    me: () => dispatch(me()),
  };
};

export default connect(mapUser, mapDispatchUser)(UserProfileContainer);
//import React from "react";
/*import React, {Component} from 'react';
import { Link } from "react-router-dom";
import SearchPage from "../SearchPage";
import { UserProfileView} from "../views/UserProfileView";
import { connect } from 'react-redux';

//let added_recipes = SearchPage.added_recipes;

//const added_recipes = added_recipes;

class UserProfileContainer extends Component {

  constructor() {
    // console.log("constructor");
    super();
    this.state = {
      currentUser: "",
      added_recipes: [],

    }
    this.blankState = this.state;
  }
}

<AllRecipesView recipes={this.props.allRecipes} />
  export default UserProfileContainer;
  */
