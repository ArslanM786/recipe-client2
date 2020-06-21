import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomeContainer,
  Login,
  Signup,
  AllRecipesContainer,
  AllReviewsContainer,
  UserProfileContainer,
} from "../containers";

const RoutesView = (props) => {
  const { isLoggedIn } = props;

  return (
    <Switch>
      {/* Routes placed within this section are available to all visitors */}
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path="/recipes" component={AllRecipesContainer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/reviews" component={AllReviewsContainer} />
      <Route exact path="/profile" component={UserProfileContainer} />

      {isLoggedIn && (
        <Switch>
          {/* Routes placed within this section are only available after
          logging in */}
        </Switch>
      )}

      {/* Displays our Login component as a fallback */}
      <Route component={Login} />
    </Switch>
  );
};

export default RoutesView;
