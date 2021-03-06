import React from 'react';
import { css } from 'emotion';
import { colours } from '../resources/colours';
import { breakPoints } from '../resources/breakPoints';
import { galleryIcon } from '../resources/img/icons';
import ImageViewer from './ImageViewer';

const StaticGallery = (props) => {
  const style = {
    gallery: css`
      margin-bottom: 50px;
    `,
    galleryContainer: css`
    `,
    galleryContainer__textContainer: css`      
      margin: 10px 0;
      @media ${breakPoints.tabletPortrait} {
        margin: 15px 0;
      }
      @media ${breakPoints.desktopSmall} {
        margin: 20px 0;
      }
    `,
    galleryContainer__headline: css`
      font-size: 1.5em;
      margin-bottom: 10px;
      @media ${breakPoints.tabletPortrait} {
        font-size: 1.5em;
        margin-bottom: 15px;
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
    galleryContainer__img: css`
      position: relative;
      width: 100%;
      height: 300px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 3px;
      
      margin-top: 10px;
      @media ${breakPoints.tabletPortrait} {
        margin-top: 15px;
      }
      @media ${breakPoints.desktopSmall} {
        margin-top: 20px;
      }
      
      span {
        position: absolute;
        bottom: 50%;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, 50%);
        text-align: center;
        display: inline-block;
        
        svg {
          fill: ${colours.c1};
          width: 30px;
          height: 30px;
        }
      }
    `,
  };

  const getImages = galleryName => {
    const gallery = props.galleries[galleryName];
    return (
        gallery.map(img => {
              return (
                  <div
                      className={style.galleryContainer__img}
                      style={{
                        backgroundImage: `url(${img.url})`,
                      }}
                      key={`img_${img.id}`}
                      onClick={() => props.createImageViewerHandler(galleryName, gallery.indexOf(img))}
                  >
                    <span>{galleryIcon()}</span>
                  </div>
              );
            }
        )
    );
  };

  const getGalleries = () => (
      Object.keys(props.galleries).map(galleryName => {
            return (
                <div className={style.galleryContainer} key={galleryName}>
                  <div className={style.galleryContainer__textContainer}>
                    <p className={style.galleryContainer__headline}>{props.descriptions[galleryName].headline}</p>
                    <p className={style.galleryContainer__text}>{props.descriptions[galleryName].text}</p>
                    {props.descriptions[galleryName].subText ? (
                        <p className={style.galleryContainer__subText}>{props.descriptions[galleryName].subText}</p>) : null}
                  </div>
                  {getImages(galleryName)}
                </div>
            );
          }
      )
  );

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

export default StaticGallery;
