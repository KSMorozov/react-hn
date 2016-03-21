import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'new',
          url: 'newest',
        },
        {
          name: 'comments',
          url: 'newcomments',
        },
        {
          name: 'show',
          url: 'show',
        },
        {
          name: 'ask',
          url: 'ask',
        },
        {
          name: 'jobs',
          url: 'jobs',
        },
        {
          name: 'submit',
          url: 'submit',
        },
      ],
    };
  }

  renderLogo() {
    return (
      <div className="newsHeader-logo">
        <a href="https://www.ycombinator.com"><img src="img/y18.gif" /></a>
      </div>
    );
  }

  renderTitle() {
    return (
      <div className="newsHeader-title">
        <a className="newsHeader-textLink" href="https://www.ycombinator.com">
          Hacker News
        </a>
      </div>
    );
  }

  renderNav() {
    return (
      <div className="newsHeader-nav">
        {
          this.state.links.map(link => {
            return (
              <a href={`https://news.ycombinator.com/${link.url}`}
                 className="newsHeader-navLink newsHeader-textLink"
                 key={link.name}
              >
                { link.name }
              </a>
            );
          })
        }
      </div>
    );
  }

  renderLogin() {
    return (
      <div className="newsHeader-login">
        <a className="newsHeader-textLink" href="https://news.ycombinator.com/login?whence=news">
          login
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsHeader">
        {this.renderLogo()}
        {this.renderTitle()}
        {this.renderNav()}
        {this.renderLogin()}
      </div>
    );
  }
}

export default Header;
