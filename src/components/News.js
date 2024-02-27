import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export class News extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container my-3">
        <h2>News Nuggets - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" />
          </div>
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" />
          </div>
          <div className="col-md-4">
          <NewsItem title="Title 1" description="Lorem epsum" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
