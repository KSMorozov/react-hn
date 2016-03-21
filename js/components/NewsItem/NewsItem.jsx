import React, { Component } from 'react';
import url from 'url';
import moment from 'moment';

class NewsItem extends Component {
  constructor(props) {
    super(props);
  }

  getDomain() {
    return url.parse(this.props.item.url).hostname;
  }

  renderRank() {
    return (
      <div className="newsItem-rank">
        { this.props.rank }.
      </div>
    );
  }

  renderVote() {
    return (
      <div className="newsItem-vote">
        <a href={
            `https://news.ycombinator.com/vote?for=${ this.props.item.id }
            &dir=up&whence=news`
        }>
          <img src="img/grayarrow2x.gif" width="10" />
        </a>
      </div>
    );
  }

  renderCommentsLink() {
    return (
      <a href={ `https://news.ycombinator.com/item?id=${this.props.item.id}`}>
        {
          this.props.item.kids && this.props.item.kids.length
          ? this.props.item.kids.length + (this.props.item.kids.length === 1 ? ' comment' : ' comments')
          : 'discuss'
        }
      </a>
    );
  }

  renderSubtext() {
    return (
      <div className="newsItem-subtext">
        { this.props.item.score + 'points by ' }
        <a href={`https://news.ycombinator.com/user?id=${this.props.item.by}`}>
          { this.props.item.by }
        </a>
        { ' ' + moment.utc(this.props.item.time * 1000).fromNow() } | { this.renderCommentsLink() }
      </div>
    );
  }

  renderTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink"
          href={ this.props.item.url ||
                 `https://news.ycombinator.com/item?id=${this.props.item.id}`
               }
        >
          { this.props.item.title }
        </a>
        <span className="newsItem-domain">{ this.props.url ? `(${this.getDomain()})` : '' }</span>
      </div>
    );
  }

  render() {
    return (
      <div className="newsItem">
        {this.renderRank()}
        {this.renderVote()}
        <div className="newsItem-itemText">
          {this.renderTitle()}
          {this.renderSubtext()}
        </div>
      </div>
    );
  }
}

export default NewsItem;
