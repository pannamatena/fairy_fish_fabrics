import React, { Component } from 'react';
import { css } from 'emotion';
import { Parallax, Background } from 'react-parallax';
import { animateScroll, scroller } from 'react-scroll';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import Gallery from './Gallery';

class App extends Component {
  constructor () {
    super();

    this.state = {
      isScrolled: false,
      windowInnerHeight: (window.innerHeight - 60),
    };

    this.checkIfScreenIsScrolled = this.checkIfScreenIsScrolled.bind(this);
    this.setWindowInnerHeight = this.setWindowInnerHeight.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.checkIfScreenIsScrolled);
    window.addEventListener('resize', this.setWindowInnerHeight);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.checkIfScreenIsScrolled);
  }

  checkIfScreenIsScrolled () {
    const scrollTop = window.scrollY;
    this.setState({
      isScrolled: scrollTop !== 0
    });
  }

  setWindowInnerHeight () {
    this.setState({
      windowInnerHeight: (window.innerHeight - 60),
    });
  }

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
      margin: 0 30px;
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
        padding-top: 30px;
      `,
      headerContainer: css`
        background: ${this.state.isScrolled ? colours.c1 : 'transparent'};
        border-bottom: ${this.state.isScrolled ? `1px dashed ${colours.c8}` : 'none'};
        z-index: 99;
        position: fixed;
        top: ${this.state.isScrolled ? '0' : '30px'};
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease;
        
        padding-top: ${this.state.isScrolled ? '10px' : '30px'};
        padding-bottom: ${this.state.isScrolled ? '10px' : '30px'};
      `,
      headerContainer__inner: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        
        margin: 0 60px;
      `,
      logo: css`
        transition: all 0.2s ease;
        font-family: ${fonts.f2};
        color: ${this.state.isScrolled ? colours.c2 : colours.c1 };
        
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
          font-family: ${fonts.f2};
          color: ${this.state.isScrolled ? colours.c2 : colours.c1 };
          
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
    };

    return (
      <div className={style.app}>
          <div className={style.pageContainer}>
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
                            style={{
                              top: `${percentage * 80}%`,
                            }}
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
              <div className="footerContainer">footer</div>
          </div>
      </div>
    );
  }
}

export default App;
