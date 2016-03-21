import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem.jsx';

class NewsItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      range: { start: 0, end: 30 },
    };

    this.handleNextPage = this.handleNextPage.bind(this);
  }

  fetchArticles() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(res => {
        res.slice(this.state.range.start, this.state.range.end).map(id => {
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(response => response.json())
            .then(res => {
              this.setState({
                articles: [...this.state.articles, res],
              });
            });
        });
      })
  }

  renderArticles() {
    return this.state.articles.map((article, i) => {
      return <NewsItem item={ article } key={ article.id } rank={this.state.range.start + i + 1} />
    });
  }

  handleNextPage() {
    this.setState({
      articles: [],
      range: { start: this.state.range.end, end: this.state.range.end + 30 },
    });
    this.fetchArticles();
  }

  renderMore() {
    return (
      <div className="newsItemsList-more">
        <a className="newsItemsList-moreLink" onClick={this.handleNextPage} target="_blank">
          More
        </a>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <div className="newsItemsList">
        { this.state.articles.length ? this.renderArticles() : 'Loading. . .' }
        { this.renderMore() }
      </div>
    );
  }
}

export default NewsItemsList;
