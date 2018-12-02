import React from 'react';
import { css } from 'emotion';
import { Parallax, Background } from 'react-parallax';
import { colours } from '../resources/colours';
import { fonts } from '../resources/fonts';
import { breakPoints } from '../resources/breakPoints';

const Gallery = (props) => {
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
      
      p {
        position: absolute;
        left: 20px;
        display: inline-block;
        max-width: 40%;
        
        font-size: 1.5em;
        top: 10px;
        @media ${breakPoints.tabletPortrait} {
          font-size: 1.5em;
          top: 15px;
        }
        @media ${breakPoints.desktopSmall} {
          font-size: 1.5em;
          top: 20px;
        }
        @media ${breakPoints.desktopLarge} {
          font-size: 1.5em;
        }
      }
    `,
    galleryContainer__inner: css`
      visibility: hidden;
    `,
    galleryContent: css`
      visibility: hidden;
      
      height: ${props.size - 55 - 54}px;
      @media ${breakPoints.tabletPortrait} {
        height: ${props.size - 65 - 70}px;
      }
      @media ${breakPoints.desktopSmall} {
        height: ${props.size - 70 - 80}px;
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
        color: ${colours.c1};
        font-family: ${fonts.f2};
        font-size: 30px;
        position: absolute;
        bottom: -100%;
        left: 50%;
        z-index: 1;
        transform: translateY(50%);
        transition: bottom .3s ease;
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

  const getImages = (gallery, percentage) => (
    gallery.map(img => (
      <button
        className={style.galleryImgContainer}
        style={{
          backgroundImage: `url(${img.url})`,
          width: img.imgWidth,
          height: img.imgHeight,
          transform: `translateX(${img.left}%)`,
          top: `${img.top - (percentage * img.scrollSpeed)}%`,
        }}
      >
        <span>{img.name}</span>
      </button>
    ))
  );
  /*style={{background: colours[`c${index + 2}`]}}*/
  const getGalleries = () => (
    Object.keys(props.galleries).map((galleryName, index) => (
        <div className={style.galleryContainer}>
          <p>"{props.descriptions[galleryName]}"</p>
          <Parallax
              strength={100}
              contentClassName={style.galleryContainer__inner}

              renderLayer={percentage => getImages(props.galleries[galleryName], percentage)}
          >
            <Background></Background>
            <div className={style.galleryContent}></div>
          </Parallax>
        </div>
      )
    )
  );

  return (
    <div className={style.gallery}>
      {getGalleries()}
    </div>
  );
};

export default Gallery;
