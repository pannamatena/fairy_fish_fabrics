import React, { Component } from 'react';
import { css } from 'emotion';
import { Parallax } from 'react-parallax';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import Gallery from './Gallery';
import Header from './Header';
import Footer from './Footer';

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
      return '70px';
    }
    if (this.state.isBottomReached) {
      return '200px';
    }
    return '0';
  }

  isBottomReached(el) {
    return el.getBoundingClientRect().bottom <= (window.innerHeight + 80);
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
    const innerContainer = css`
      margin: 0 20px;
    `;
    /*const styleButton = {
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
    };*/
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
        padding-bottom: 220px;
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
        <div id="page_container" className={style.pageContainer}>
          <Header
              isScrolled={this.state.isScrolled}
          />
          <div className={`${style.promotionContainer} ${innerContainer}`}>
            <Parallax
                blur={{ min: -8, max: 15 }}
                bgImage={require('../resources/img/bg.jpg')}
                strength={-200}
                contentClassName={style.promotionContainer__inner}
                renderLayer={() => (
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
          <div
              name="_portfolio"
              className={innerContainer}
          >
            <Gallery />
          </div>
          <Footer
              displayFooter={this.displayFooter()}
              isBottomReached={this.state.isBottomReached}
          />
        </div>
      </div>
    );
  }
}

export default App;
