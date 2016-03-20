import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem.jsx';

class NewsItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  fetchArticles() {
    fetch('./json/items.json')
      .then(response => response.json())
      .then(res => this.setState({ articles: res }))
  }

  renderArticles() {
    return this.state.articles.map(article => {
      return <NewsItem item={ article } key={ article.id } />
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <div>
        { this.state.articles.length ? this.renderArticles() : 'No Articles Yet.' }
      </div>
    );
  }
}

export default NewsItemsList;
