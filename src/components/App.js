import React, { Component } from 'react';
import { css } from 'emotion';
import { Parallax, Background } from 'react-parallax';
import { animateScroll, scroller } from 'react-scroll';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import { facebook, instagram, pinterest } from '../resources/img/icons';
import Gallery from './Gallery';

class App extends Component {
  constructor() {
    super();

    this.sidePadding = 20;
    this.defaultHeaderHeight = 80;

    this.state = {
      isScrolled: false,
      isBottomReached: false,
      windowInnerHeight: (window.innerHeight - this.sidePadding - this.defaultHeaderHeight),
    };

    this.trackScroll = this.trackScroll.bind(this);
    this.checkIfScreenIsScrolled = this.checkIfScreenIsScrolled.bind(this);
    this.setWindowInnerHeight = this.setWindowInnerHeight.bind(this);
    this.displayFooter = this.displayFooter.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScroll);
    window.addEventListener('resize', this.setWindowInnerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScroll);
  }

  checkIfScreenIsScrolled() {
    const scrollTop = window.scrollY;
    this.setState({
      isScrolled: scrollTop !== 0
    });
  }

  setWindowInnerHeight() {
    this.setState({
      windowInnerHeight: (window.innerHeight - this.sidePadding - this.defaultHeaderHeight),
    });
  }

  displayFooter() {
    if ((window.scrollY > 50) && !this.state.isBottomReached) {
      return '60px';
    }
    if (this.state.isBottomReached) {
      return '200px';
    }
    return '0';
  }

  isBottomReached(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScroll() {
    this.checkIfScreenIsScrolled();

    const wrappedElement = document.getElementById('page_container');
    this.setState({
      isBottomReached: this.isBottomReached(wrappedElement),
    });
    document.removeEventListener('scroll', this.trackScroll);
  };

  render() {
    const outerContainer = css`
      width: 100%;
    `;
    const innerContainer = css`
      width: 85%;
      margin: auto;
      
      max-width: 1400px;
    `;
    const innerContainer_2 = css`
      margin: 0 20px;
    `;
    const styleButton = {
      primary: css`
        color: ${colours.c9};
        border: 1px solid ${colours.c9};
        padding: 10px 15px;
        font-size: 16px;
        border-radius: 3px;
        
        :hover {
          color: ${colours.c1};
          background: ${colours.c9};
        }
      `
    };
    const style = {
      app: css`
        flex: 1;
        background: ${colours.c1};
        font-family: ${fonts.f3};
        color: ${colours.c2};
        
        font-size: 14px;
        
        a {
          text-decoration: none;
        }
      `,
      pageContainer: css`
        height: 100%;
        padding-top: 80px;
      `,
      headerContainer: css`
        background: ${colours.c1};
        border-bottom: ${this.state.isScrolled ? `1px dashed ${colours.c8}` : 'none'};
        z-index: 99;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease;
        
        padding-top: ${this.state.isScrolled ? '10px' : '20px'};
        padding-bottom: ${this.state.isScrolled ? '10px' : '20px'};
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
      promotionContainer: css`
      `,
      promotionContainer__inner: css`
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: ${this.state.windowInnerHeight}px;
      `,
      promotionContainer__text: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        a {
          color: ${colours.c1};
          border: 2px solid ${colours.c1};
          display: block;
          width: 100px;
          height: 100px;
        }
        
        h2 {
          font-size: 40px;
          color: ${colours.c1};
        }
      `,
      footerContainer: css`
        width: 100%;
        background: ${colours.c1};
        z-index: 99;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease;
        border-top: 1px dashed ${colours.c8};
        height: ${this.displayFooter()};
      `,
      footerContainer__inner: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        
        margin: 0 20px;
        padding: 20px 0;
      `,
      socialLinks: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        
        li {
          margin: 0 10px;
        }
        
        svg {
          width: 30px;
          height: 30px;
          fill: ${colours.c2};
          transition: all 0.2s ease;
        }
        
        a:hover {
          svg {
            fill: ${colours.c3};
          }
        }
      `,
      credentials: css`
        color: ${colours.c8};
        
        a {
          color: ${colours.c8};
        }
        
        a:hover {
          color: ${colours.c4};
        }
      `,
    };

    return (
      <div className={style.app}>
          <div id="page_container" className={style.pageContainer}>
              <div className={`${style.headerContainer} ${outerContainer}`}>
                <div className={`${style.headerContainer__inner}`}>
                  <a className={style.logo} href="/">FairyFish Fabrics</a>
                  <ul className={style.mainMenu}>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className={`${style.promotionContainer} ${innerContainer_2}`}>
                <Parallax
                    blur={{ min: -8, max: 15 }}
                    bgImage={require('../resources/img/bg.jpg')}
                    strength={-200}
                    contentClassName={style.promotionContainer__inner}
                    renderLayer={percentage => (
                        <div
                            className={style.promotionContainer__text}
                        >
                          <a href="/">[logo img]</a>
                          <h2>Handwoven shawls and scarves</h2>
                        </div>
                    )}
                >
                </Parallax>
              </div>
              <div className="galleryContainer">
                <div className={innerContainer}>
                  <Gallery />
                </div>
              </div>
              <div className="socialContainer">social</div>
              <div className={style.footerContainer}>
                <div className={style.footerContainer__inner}>
                  <ul className={style.socialLinks}>
                    <li><a href="/">{facebook()}</a></li>
                    <li><a href="/">{instagram()}</a></li>
                    <li><a href="/">{pinterest()}</a></li>
                  </ul>
                  <div className={style.credentials}>Icons made by <a href="https://www.flaticon.com/authors/graphicsbay" title="GraphicsBay">GraphicsBay</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
