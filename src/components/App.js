import React, { Component } from 'react';
import { css } from 'emotion';
import { Parallax } from 'react-parallax';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import { breakPoints } from '../resources/breakPoints';
import { galleryImages, galleryDescriptions } from '../resources/img/galleryImages';
import Gallery from './Gallery';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isScrolled: false,
      isBottomReached: false,
      windowInnerHeight: window.innerHeight,
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
      windowInnerHeight: window.innerHeight,
    });
  }

  displayFooter() {
    if ((window.scrollY > 20) && !this.state.isBottomReached) {
      return 'SHOW';
    }
    if (this.state.isBottomReached) {
      return 'SHOW_BOTTOM';
    }
    return 'HIDDEN';
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
      margin: 0 10px;
      @media ${breakPoints.tabletPortrait} {
        margin: 0 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 0 20px;
      }
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
        
        font-size: 1em;
        
        a {
          color: ${colours.c2};
          text-decoration: none;
          transition: color 0.2s ease;
          
          :hover {
            color: ${colours.c9};
          }
        }
      `,
      pageContainer: css`
        height: 100%;
        
        padding-top: 54px;
        padding-bottom: 220px;
        @media ${breakPoints.tabletPortrait} {
          padding-top: 70px;
          padding-bottom: 220px;
        }
        @media ${breakPoints.desktopSmall} {
          padding-top: 80px;
          padding-bottom: 220px;
        }
      `,
      promotionContainer__inner: css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: ${this.state.windowInnerHeight - 10 - 54}px;
        @media ${breakPoints.tabletPortrait} {
          height: ${this.state.windowInnerHeight - 15 - 70}px;
        }
        @media ${breakPoints.desktopSmall} {
          height: ${this.state.windowInnerHeight - 20 - 80}px;
        }
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
          color: ${colours.c1};
          text-align: center;
          
          font-size: 1.5em;
          @media ${breakPoints.tabletPortrait} {
            font-size: 1.8em;
          }
          @media ${breakPoints.desktopSmall} {
            font-size: 2.3em;
          }
          @media ${breakPoints.desktopLarge} {
            font-size: 2.8em;
          }
        }
      `,
      aboutContainer: css`
        overflow: hidden;
        max-width: 1000px;
        margin: auto;
        
        padding-top: 10px;
        @media ${breakPoints.tabletPortrait} {
          padding-top: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          padding-top: 20px;
        }
      `,
      aboutContainer__img: css`
        max-width: 20%;
        float: left;
      `,
    };

    return (
      <div className={style.app}>
        <div id="page_container" className={style.pageContainer}>
          <Header
              isScrolled={this.state.isScrolled}
          />
          <div className={`promotionContainer ${innerContainer}`}>
            <Parallax
                blur={{ min: -8, max: 15 }}
                bgImage={require('../resources/img/bg_2.jpg')}
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
            <Gallery
                galleries={galleryImages}
                descriptions={galleryDescriptions}
                size={this.state.windowInnerHeight}
            />
          </div>
          <div
              name="_about"
              className={style.aboutContainer}
          >
            <img className={style.aboutContainer__img} src="/imgs/about.jpg" alt="About FairyFish Fabrics" />
            <p>I'm Tünde. And I can't imagine my life without weaving and threads.</p>
            <p>In April 2016 I fell in love with weaving forever. At the time I didn't know how it would change my life.</p>
            <p>Habár a fonás és a szövés ősi mesterségek, mára már gépekkel végezik, de a világ különböző szegleteiben még a most is szőnek, fonnak kézzel. Sokan hagyomány őrzésből végzik ezeket a mesterségeket, ám én úgy érzem, hogy igenis szabad újító lélekkel, a mai igényekhez közelebbi szőtteseket is készíteni.</p>
            <p>A szövés egy csodálatos utazás számomra, minden darabban benne vagyok egy kicsit én magam is, a történetem, a világom, a látásmódom.<br />
              Minden kendő és kelme, amit készítek más és más, egyedi és megismételhetetlen. Csak kiváló minőségű alapanyagokból, gyakran egyedi, kézzel festett vagy font fonalakból dolgozom. Kedvenc alapanyagom a selyem, amit igazán sokszor használok.</p>
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
