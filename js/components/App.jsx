import React, { Component } from 'react';
import NewsItemsList from './NewsItemsList/NewsItemsList.jsx'
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      <div>
        <img src="img/y18.gif" />
        News Ycombinator
        <NewsItemsList />
      </div>
    );
  }
}

export default App;
