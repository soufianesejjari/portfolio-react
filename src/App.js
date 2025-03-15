import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ProfileProvider } from "./context/ProfileContext";
import { ThemeProvider } from "styled-components";
import { Theme } from "./themes/default";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <ProfileProvider>
              <Home />
            </ProfileProvider>
          </Route>
          <Route path="/:profileId">
            <ProfileProvider>
              <Home />
            </ProfileProvider>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
