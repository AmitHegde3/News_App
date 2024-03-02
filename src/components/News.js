import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
  constructor() {
    super();
    // console.log("Hello this is a constrcutor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d0894b6a6f483b940c71817d4b97d6&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

 handlePrevLink =  async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d0894b6a6f483b940c71817d4b97d6&page=${this.state.page - 1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles
  })
  }

  handleNextLink = async () => {
    if (this.state.page > Math.ceil(this.state.totalResults / 20)) {
      
    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a4d0894b6a6f483b940c71817d4b97d6&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    }
    
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Nuggets - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between my-1">
          <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevLink}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextLink}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
