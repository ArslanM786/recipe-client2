import React from "react";
import { Link } from "react-router-dom";

const UserProfileView = (props) => {
  return (
    <div>
      <h1>Welcome to Your Profile</h1>
      <Link to="/recipes" className="nav-link">
        <p>Recipes</p>
      </Link>
      <Link to="/reviews" className="nav-link">
        <l1>Reviews</l1>
      </Link>
    </div>
  );
};

export default UserProfileView;

//import React from "react";
//import "./styles/HomeView.css";
/*import React, { Component } from "react";
import { Link } from "react-router-dom";

const UserProfileView = (props) => {
  const {
    currentUser,
    handleChange,
    handleSubmit,
    handleReset,
    userInfo,
    addedRecipes,
  } = props;
  return (
    //<home>
    <div>
      <h3>Welcome to your Profile!</h3>
      <div className="App">
        <header className="App-header">
          <p>{`${currentUser.username || ""}`}</p>
          <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br></br>
            <br></br>
            <button>Display User</button>
          </form>
          <button onClick={handleReset}>Reset</button>
        </header>
      </div>
      );
      <Link to="/recipes" className="nav-link">
        <p>Recipes</p>
      </Link>
      <Link to="/reviews" className="nav-link">
        <l1>Reviews</l1>
      </Link>
    </div>
    //</home>
  );
};

export default UserProfileView;
//import React from "react";
*/
