import React from "react";
import { Route, Switch } from "react-router";
import Favorites from "../screens/Favorites";
import Main from "../screens/Main";

const RootNavigation: React.FC = () => {
  return (
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
  );
};

export default RootNavigation;
