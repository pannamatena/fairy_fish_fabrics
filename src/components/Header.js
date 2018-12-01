import React, { Component } from 'react';
import { css } from 'emotion';
import { animateScroll, scroller } from 'react-scroll';
import { colours } from '../resources/colours';
import {fonts} from "../resources/fonts";

class Header extends Component {
  constructor(props) {
    super(props);

    this.createMenuItemClickHandler = this.createMenuItemClickHandler.bind(this);
  }

  createMenuItemClickHandler(elementName) {
    return () => {
      const offset = -this.refs.headerContainer.clientHeight;
      scroller.scrollTo(elementName, {
        duration: 400,
        smooth: true,
        offset
      });
    }
  }

  scrollToBottom () {
    animateScroll.scrollToBottom({ duration: 400 });
  }

  render() {
    const style = {
      headerContainer: css`
      background: ${colours.c1};
      border-bottom: ${this.props.isScrolled ? `1px dashed ${colours.c8}` : 'none'};
      z-index: 99;
      position: fixed;
      top: 0;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      transition: all 0.2s ease;
      
      padding-top: ${this.props.isScrolled ? '10px' : '20px'};
      padding-bottom: ${this.props.isScrolled ? '10px' : '20px'};
    `,
      headerContainer__inner: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      
      margin: 0 20px;
    `,
      logo: css`
      transition: all 0.2s ease;
      font-family: ${fonts.f2};
      color: ${colours.c2};
      
      font-size: 28px;
    `,
      mainMenu: css`
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      
      li {
        margin-left: 3%;
      }
      
      a {
        transition: all 0.2s ease;
        font-family: ${fonts.f1};
        color: ${colours.c2};
        
        font-size: 28px;
        
        :hover {
          color: ${colours.c3};
        }
      }
    `,
    };

    return (
        <div ref="headerContainer" className={style.headerContainer}>
          <div className={style.headerContainer__inner}>
            <a className={style.logo} href="/">FairyFish Fabrics</a>
            <ul className={style.mainMenu}>
              <li><a onClick={this.createMenuItemClickHandler('_portfolio')}>Portfolio</a></li>
              <li><a href="/">About</a></li>
              <li><a onClick={() => this.scrollToBottom()}>Contact</a></li>
            </ul>
          </div>
        </div>
    );
  }
}
export default Header;
