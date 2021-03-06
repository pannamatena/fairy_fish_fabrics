import React, { Component } from 'react';
import { css } from 'emotion';
import { animateScroll, scroller } from 'react-scroll';
import ClickOutside from 'react-click-outside';
import { colours } from '../resources/colours';
import { fonts } from "../resources/fonts";
import { breakPoints } from '../resources/breakPoints';
import { mobileMenuOpener, logo } from '../resources/img/icons';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.createMenuItemClickHandler = this.createMenuItemClickHandler.bind(this);
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  createMenuItemClickHandler(elementName) {
    return () => {
      const offset = -this.refs.headerContainer.clientHeight;
      scroller.scrollTo(elementName, {
        duration: 500,
        smooth: true,
        offset
      });
      this.closeMenu();
    }
  }

  scrollToTop () {
    animateScroll.scrollToTop({ duration: 500 });
  }

  scrollToBottom () {
    animateScroll.scrollToBottom({ duration: 500 });
  }

  toggleMenuOpen() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  closeMenu() {
    this.setState({
      isMenuOpen: false
    });
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
      
      padding-top: ${this.props.isScrolled ? '5px' : '10px'};
      padding-bottom: ${this.props.isScrolled ? '5px' : '10px'};
      @media ${breakPoints.tabletPortrait} {
        padding-top: ${this.props.isScrolled ? '10px' : '15px'};
        padding-bottom: ${this.props.isScrolled ? '10px' : '15px'};
      }
      @media ${breakPoints.desktopSmall} {
        padding-top: ${this.props.isScrolled ? '10px' : '20px'};
        padding-bottom: ${this.props.isScrolled ? '10px' : '20px'};
      }
    `,
      headerContainer__inner: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: relative;
      
      margin: 0 10px;
      @media ${breakPoints.tabletPortrait} {
        margin: 0 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 0 20px;
      }
    `,
    logoContainer: css`
      p {
        font-size: 0.8em;
        line-height: 1;
      }
    `,
    logo: css`
      transition: all 0.2s ease;
      font-family: ${fonts.f2};
      color: ${colours.c2};
      background: none;
      
      font-size: 2em;
      @media ${breakPoints.desktopLarge} {
        font-size: 1.8em;
      }
      
      svg {
        transition: all 0.2s ease;
        fill: ${colours.c2};
      }
      
      :hover {
        color: ${colours.c3};
        
        svg {
          fill: ${colours.c3};
        }
      }
    `,
    logoImg: css`
      display: inline-block;
      margin-right: 5px;
      width: 30px;
    `,
      mobileMenuOpener: css`
        @media ${breakPoints.tabletPortrait} {
          display: none;
        }
        
        svg {
          width: 30px;
          height: 30px;
          fill: ${colours.c2};
        }
        
        :hover {
          svg {
            fill: ${colours.c3};
          }
        }
      `,
      mainMenuContainer: css`
        @media ${breakPoints.tabletPortrait} {
          flex: 1;
        }
      `,
      mainMenu: css`
      transition: all 0.2s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateY(100%);
      background: ${colours.c1};
      width: 100%;
      height: ${this.state.isMenuOpen ? '150px' : '0'};
      border-top: ${this.state.isMenuOpen ? `1px dashed ${colours.c8}` : 'none'};
        
       @media ${breakPoints.tabletPortrait} {
        background: none;
        width: auto;
        position: initial;
        height: auto;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        transform: translateY(0);
        border-top: none;
      }
      
      li {
        margin: 10px 0 0;
        :first-child {
          margin-top: 0;
        }
        
        @media ${breakPoints.tabletPortrait} {
          margin: 0 0 0 3%;
        }
      }
      
      button {
        transition: all 0.2s ease;
        font-family: ${fonts.f1};
        color: ${colours.c2};
        background: none;
        
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
            <div className={style.logoContainer}>
              <button className={style.logo} onClick={() => this.scrollToTop()}>
                <div className={style.logoImg}>{logo()}</div>FairyFish Fabrics
              </button>
              <p>Silk, alpaca wool and tulle fabrics made by hand</p>
            </div>
            <ClickOutside className={style.mainMenuContainer} onClickOutside={() => this.closeMenu()}>
              <button className={style.mobileMenuOpener} onClick={() => this.toggleMenuOpen()}>{mobileMenuOpener()}</button>
              <ul className={style.mainMenu}>
                <li><button onClick={this.createMenuItemClickHandler('_portfolio')}>Portfolio</button></li>
                <li><button onClick={this.createMenuItemClickHandler('_about')}>About</button></li>
                <li><button onClick={() => this.scrollToBottom()}>Contact</button></li>
              </ul>
            </ClickOutside>
          </div>
        </div>
    );
  }
}
export default Header;
