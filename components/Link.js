import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default class CustomLink extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    isStyled: PropTypes.bool,
    isDarkStyled: PropTypes.bool,
  };

  static defaultProps = {
    isStyled: false,
    isDarkStyled: false,
  };

  render() {
    const linkClassNames = `
      ${this.props.isStyled ? 'link--light' : undefined}
      ${this.props.isDarkStyled ? 'link--dark' : undefined}`;

    return (
      <Link href={this.props.href}>
        <a target={this.props.target} className={linkClassNames}>
          <style jsx>{`
            .link--light {
              color: rgba(65, 160, 248, 1);
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }

              &:visited {
                color: rgba(65, 160, 248, 1);
              }
            }

            .link--dark {
              color: #000000;
              text-decoration: none;
              transition: all 200ms ease;
              transition-property: opacity, transform;
              cursor: pointer;
              overflow-wrap: break-word;
              word-break: break-word;

              &:hover {
                opacity: 0.5;
              }

              &:active {
                transform: scale(1.2);
              }

              &:visited {
                color: #000000;
              }
            }
          `}</style>
          {this.props.children}
        </a>
      </Link>
    );
  }
}
