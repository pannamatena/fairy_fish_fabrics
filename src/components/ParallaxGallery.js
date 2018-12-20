import React from 'react';
import { css } from 'emotion';
import { Parallax, Background } from 'react-parallax';
import { colours } from '../resources/colours';
import { breakPoints } from '../resources/breakPoints';
import { galleryIcon } from '../resources/img/icons';
import ImageViewer from './ImageViewer';

const ParallaxGallery = (props) => {
  const style = {
    gallery: css`
      position: relative;
      margin-top: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
      }
    `,
    galleryContainer: css`
      position: relative;
    `,
    galleryContainer__textContainer: css`
      z-index: 1;
      position: absolute;
      top: 0;
      display: inline-block;
      max-width: 40%;
      background: rgba(253, 253, 251, 0.6);
      border-radius: 3px;
      
      padding: 10px;
      @media ${breakPoints.tabletPortrait} {
        padding: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        padding: 20px;
      }
    `,
    'galleryContainer__textContainer--left': css`
      left: 50%;
      transform: translateX(-110%);
    `,
    'galleryContainer__textContainer--right': css`
      right: 50%;
      transform: translateX(110%);
    `,
    galleryContainer__inner: css`
      visibility: hidden;
    `,
    galleryContainer__headline: css`
      font-size: 1.5em;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 1.5em;
        margin-bottom: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-bottom: 20px;
      }
      @media ${breakPoints.desktopLarge} {
        font-size: 2em;
      }
    `,
    galleryContainer__text: css`
    `,
    galleryContainer__subText: css`
      margin-top: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
      }
    `,
    galleryContent: css`
      visibility: hidden;
      
      /* screen height - header height - footer height */
      height: ${props.screenHeight - 55 - 54}px;
      @media ${breakPoints.tabletPortrait} {
        height: ${props.screenHeight - 65 - 70}px;
      }
      @media ${breakPoints.desktopSmall} {
        height: ${props.screenHeight - 70 - 80}px;
      }
    `,
    galleryImgContainer: css`
      position: absolute;
      left: 50%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 3px;
      overflow: hidden;
      
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        background: ${colours.c3};
        height: 0;
        width: 100%;
        opacity: 0.3;
        transition: height .3s ease;
      }
      
      span {
        position: absolute;
        bottom: -100%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, 50%);
        transition: bottom .3s ease;
        text-align: center;
        display: inline-block;
        max-width: 150px;
        
        svg {
          fill: ${colours.c1};
          width: 30px;
        }
      }
      
      &:hover {
        &:before {
          height: 100%;
        }
        span {
          bottom: 50%;
        }
      }
    `,
  };

  const getImgProportions = (width, height, top) => {
    const newImgProportions = {
      width,
      height,
      top,
    };
    // hidden from tablet portrait down,
    // and only need to alter below 1400px wide
    if (props.screenWidth < 1124) {
      newImgProportions.width = (width / 1.5);
      newImgProportions.height = (height / 1.5);
      newImgProportions.top = (top + 10);
    } else if (props.screenWidth < 1250) {
      newImgProportions.width = (width / 1.3);
      newImgProportions.height = (height / 1.3);
      newImgProportions.top = (top + 6);
    } else if (props.screenWidth < 1400) {
      newImgProportions.width = (width / 1.1);
      newImgProportions.height = (height / 1.1);
      newImgProportions.top = (top + 5);
    }
    return newImgProportions;
  };

  const getImages = (galleryName, percentage) => {
    const gallery = props.galleries[galleryName];
    return (
        gallery.map(img => {
          const optimizedImageProportions = getImgProportions(img.imgWidth, img.imgHeight, img.top);
          return (
              <button
                  className={style.galleryImgContainer}
                  key={img.id}
                  style={{
                    backgroundImage: `url(${img.thumb})`,
                    width: optimizedImageProportions.width,
                    height: optimizedImageProportions.height,
                    transform: `translateX(${img.left}%)`,
                    top: `${optimizedImageProportions.top - (percentage * img.scrollSpeed)}%`,
                  }}
                  onClick={() => props.createImageViewerHandler(galleryName, gallery.indexOf(img))}
              >
                <span>{galleryIcon()}</span>
              </button>
          )
        })
    );
  };

  const getGalleries = () => {
    const galleryContainerOrientationClass = galleryName => `galleryContainer__textContainer--${props.descriptions[galleryName].orientation}`;
    return (
        Object.keys(props.galleries).map(galleryName => (
                <div className={style.galleryContainer} key={galleryName}>
                  <div className={`${style.galleryContainer__textContainer} ${style[galleryContainerOrientationClass(galleryName)]}`}>
                    <p className={style.galleryContainer__headline}>{props.descriptions[galleryName].headline}</p>
                    <p className={style.galleryContainer__text}>{props.descriptions[galleryName].text}</p>
                    {props.descriptions[galleryName].subText ? (<p className={style.galleryContainer__subText}>{props.descriptions[galleryName].subText}</p>) : null}
                  </div>
                  <Parallax
                      strength={100}
                      contentClassName={style.galleryContainer__inner}
                      renderLayer={percentage => getImages(galleryName, percentage)}
                  >
                    <Background></Background>
                    <div className={style.galleryContent}></div>
                  </Parallax>
                </div>
            )
        )
    );
  };

  return (
    <div className={style.gallery}>
      {getGalleries()}
      <ImageViewer
          currentImage={props.currentImage}
          currentGallery={props.currentGallery}
          galleries={props.galleries}
          isImageViewerOpen={props.isImageViewerOpen}
          goToNextImage={() => props.goToNextImage(props.currentGallery)}
          goToPrevImage={props.goToPrevImage}
          goToSelectedImage={props.goToSelectedImage}
          closeImageViewer={props.closeImageViewer}
      />
    </div>
  );
};

export default ParallaxGallery;
