import React, { Component } from 'react';
import { css } from 'emotion';
import { Parallax } from 'react-parallax';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import { breakPoints } from '../resources/breakPoints';
import { galleryImages, galleryDescriptions } from '../resources/img/galleryImages';
import ParallaxGallery from './ParallaxGallery';
import StaticGallery from './StaticGallery';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isScrolled: false,
      isBottomReached: false,
      windowInnerHeight: window.innerHeight,
      windowInnerWidth: window.innerWidth,
      isImageViewerOpen: false,
      currentImage: 0,
      currentGallery: null,
    };

    this.trackScroll = this.trackScroll.bind(this);
    this.checkIfScreenIsScrolled = this.checkIfScreenIsScrolled.bind(this);
    this.setWindowInnerHeight = this.setWindowInnerHeight.bind(this);
    this.setWindowInnerWidth = this.setWindowInnerWidth.bind(this);
    this.displayFooter = this.displayFooter.bind(this);
    this.createImageViewerHandler = this.createImageViewerHandler.bind(this);
    this.closeImageViewer = this.closeImageViewer.bind(this);
    this.goToNextImage = this.goToNextImage.bind(this);
    this.goToPrevImage = this.goToPrevImage.bind(this);
    this.goToSelectedImage = this.goToSelectedImage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScroll);
    window.addEventListener('resize', () => {
      this.setWindowInnerHeight();
      this.setWindowInnerWidth();
    });
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

  setWindowInnerWidth() {
    this.setState({
      windowInnerWidth: window.innerWidth,
    });
  }

  createImageViewerHandler(galleryId, imgIndex) {
    this.setState({
      currentImage: imgIndex,
      isImageViewerOpen: true,
      currentGallery: galleryId,
    });
  }

  closeImageViewer() {
    this.setState({
      isImageViewerOpen: false,
      currentImage: 0,
      currentGallery: null,
    });
  }

  goToPrevImage() {
    if (this.state.currentImage === 0) {
      return;
    }
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  goToNextImage(currentGallery) {
    const gallery = galleryImages[currentGallery];
    if (this.state.currentImage === gallery.length - 1) {
      return;
    }
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  goToSelectedImage(index) {
    this.setState({
      currentImage: index,
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

  getGalleryType() {
    return this.state.windowInnerWidth < 800 ? (
        <StaticGallery
            galleries={galleryImages}
            descriptions={galleryDescriptions}
            createShowGalleryHandler={this.createShowGalleryHandler}
            closeImageViewer={this.closeImageViewer}
            goToPrevImage={this.goToPrevImage}
            goToNextImage={this.goToNextImage}
            goToSelectedImage={this.goToSelectedImage}
            currentImage={this.state.currentImage}
            currentGallery={this.state.currentGallery}
            isImageViewerOpen={this.state.isImageViewerOpen}
        />
    ) : (
        <ParallaxGallery
            galleries={galleryImages}
            descriptions={galleryDescriptions}
            screenHeight={this.state.windowInnerHeight}
            screenWidth={this.state.windowInnerWidth}
            createImageViewerHandler={this.createImageViewerHandler}
            closeImageViewer={this.closeImageViewer}
            goToPrevImage={this.goToPrevImage}
            goToNextImage={this.goToNextImage}
            goToSelectedImage={this.goToSelectedImage}
            currentImage={this.state.currentImage}
            currentGallery={this.state.currentGallery}
            isImageViewerOpen={this.state.isImageViewerOpen}
        />
    );
  }

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
            font-size: 2em;
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
        
        padding: 10px 10px 0;
        @media ${breakPoints.tabletPortrait} {
          padding: 15px 15px 0;
        }
        @media ${breakPoints.desktopSmall} {
          padding: 20px 20px 0;
        }
        
        p {
          margin-bottom: 10px;
          @media ${breakPoints.tabletPortrait} {
            margin-bottom: 15px;
          }
          @media ${breakPoints.desktopSmall} {
            margin-bottom: 20px;
          }
        }
      `,
      aboutContainer__headline: css`
        font-size: 1.5em;
        @media ${breakPoints.desktopSmall} {
          font-size: 2em;
        }
      `,
      aboutContainer__img: css`
        max-width: 20%;
        float: left;
        border-radius: 3px;
        
        margin-right: 10px;
        @media ${breakPoints.tabletPortrait} {
          margin-right: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          margin-right: 20px;
        }
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
            {this.getGalleryType()}
          </div>
          <div
              name="_about"
              className={style.aboutContainer}
          >
            <img className={style.aboutContainer__img} src="/imgs/about.png" alt="About FairyFish Fabrics" />
            <p className={style.aboutContainer__headline}>I'm Tünde.<br />And I can't imagine my life without weaving and threads.</p>
            <p>In April 2016 I fell in love with weaving forever. At the time I didn't know how it would change my life.</p>
            <p>Although weaving is an ancient trade, today it's mostly done by machines. But in some places in the world people still use their hands to create textiles, mostly to keep traditions. However, I believe in making fabrics in a reforming spirit, bringing them closer to demands of today.</p>
            <p>Weaving is a wonderful journey for me, every piece I create contains a bit from me, my story, my world, my views.<br />
              Each shawl and fabric is different, one-of-a-kind and unrepeatable. I only work with the best quality materials, often with unique, hand-painted or hand-woven threads. My favourite is silk, which I use frequently.</p>
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
