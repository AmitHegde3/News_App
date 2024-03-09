import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    // console.log("Hello this is a constrcutor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalize(this.props.category)} - News Nuggets`;
  }

  capitalize = (str) => {
    if (!str) return "";

    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
  };

  // handlePrevLink = async () => {
  //   // this.setState({ loading: true });
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${this.props.pageSize}`;

  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  // handleNextLink = async () => {
  //   // if (
  //   //   this.state.page > Math.ceil(this.state.totalResults / this.props.pageSize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
  //   //     this.state.page + 1
  //   //   }&pageSize=${this.props.pageSize}`;
  //   //   this.setState({ loading: true });
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }

  //   this.setState({
  //     page: this.state.page + 1,
  //   });

  //   this.updateNews();
  // };

  render() {
    return (
      <>
        <h2 className="text-center">{this.props.headline}</h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <h4>
              <Spinner />
            </h4>
          }
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://play-lh.googleusercontent.com/XKpIJApesGkiUv5uDoybpeq3-EAh53KYGRvxheJes7F0x0Qn_Bfqm7RI9jKoexo7UE8"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-1">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevLink}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextLink}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
