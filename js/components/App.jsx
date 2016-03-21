import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import NewsItemsList from './NewsItemsList/NewsItemsList.jsx'
import Header from './Header/Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  render() {
    return (
      <div style={ { width: '85%', margin: 'auto' } }>
        <Header />
        <NewsItemsList />
      </div>
    );
  }
}

export default App;
