import "./App.css";
import { Routes, Route } from "react-router-dom";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

// News key="" Nugget
export default class App extends Component {
  pSize = 9;
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/">
            <Route
              index
              element={
                <News
                  key="general"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"general"}
                  headline={"News Nuggets - Top Headlines"}
                />
              }
            />
            <Route
              exact
              path="business"
              element={
                <News
                  key="business"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"business"}
                  headline={"News Nuggets - Business"}
                />
              }
              // element={<Spinner />}
            />
            <Route
              exact
              path="entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"entertainment"}
                  headline={"News Nuggets - Enterntainement"}
                />
              }
            />
            <Route
              exact
              path="health"
              element={
                <News
                  key="health"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"health"}
                  headline={"News Nuggets - Health"}
                />
              }
            />
            <Route
              exact
              path="science"
              element={
                <News
                  key="science"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"science"}
                  headline={"News Nuggets - Science"}
                />
              }
            />
            <Route
              exact
              path="sports"
              element={
                <News
                  key="sports"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"sports"}
                  headline={"News Nuggets - Sports"}
                />
              }
            />
            <Route
              exact
              path="technology"
              element={
                <News
                  key="technology"
                  pageSize={this.pSize}
                  country={"us"}
                  category={"technology"}
                  headline={"News Nuggets - Technology"}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    );
  }
}
