import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";


// News key="" Nugget
export default class App extends Component {
  pSize = 9;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height = {4}
      />
        <Routes>
          <Route exact path="/">
            <Route
              index
              element={
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
                <News setProgress={this.setProgress} 
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
