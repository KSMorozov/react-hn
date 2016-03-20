import React, { Component } from 'react';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsItem">
        <img src="img/grayarrow2x.gif" />
        <a className="newsItem-titleLink" href={ this.props.item.url }>
          { this.props.item.title }
        </a>
      </div>
    );
  }
}

export default NewsItem;
